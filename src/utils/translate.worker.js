import { pipeline } from '@xenova/transformers';
import { env } from '@xenova/transformers';

// Configure environment settings
env.allowLocalModels = false;
env.useBrowserCache = false;

// Define a translation pipeline class
class MyTranslationPipeline {
    static task = 'translation';
    static model = 'Xenova/nllb-200-distilled-600M';
    static instance = null;

    // Method to get an instance of the translation pipeline
    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            this.instance = await pipeline(this.task, this.model, { progress_callback });
        }
        return this.instance;
    }
}

// Event listener for handling messages
self.addEventListener('message', async (event) => {
    let translator = await MyTranslationPipeline.getInstance((progress) => {
        self.postMessage(progress);
    });

    console.log(event.data);

    // Perform the translation
    let output = await translator(event.data.text, {
        tgt_lang: event.data.tgt_lang,
        src_lang: event.data.src_lang,
        callback_function: (progress) => {
            self.postMessage({
                status: 'update',
                output: translator.tokenizer.decode(progress[0].output_token_ids, { skip_special_tokens: true })
            });
        }
    });

    console.log('Translation Complete', output);

    // Send the final output
    self.postMessage({
        status: 'complete',
        output
    });
});

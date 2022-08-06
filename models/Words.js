import mongoose from 'mongoose';

                        const wordsSchema = new mongoose.Schema({
                            artikel: String,
                            Singular: String,
                            Plural: String
                        });
                        
                        export const Words = mongoose.model('word', wordsSchema);
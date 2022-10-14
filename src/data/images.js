function importAll(r) {
  return r.keys().map(r);
}

export const familyImages =  importAll(require.context('/public/assets/images/family', false, /\.(png|jpe?g|svg)$/));
export const couplesImages =  importAll(require.context('/public/assets/images/couples', false, /\.(png|jpe?g|svg)$/));
export const babyImages =  importAll(require.context('/public/assets/images/baby', false, /\.(png|jpe?g|svg)$/));
export const weddingImages =  importAll(require.context('/public/assets/images/wedding', false, /\.(png|jpe?g|svg)$/));


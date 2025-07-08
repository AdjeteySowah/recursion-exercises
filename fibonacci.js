   // REGULAR ITERATION
function fibs(term) {
   if (term < 2 || !Number.isInteger(term)) {
      throw new Error(`Invalid argument for fibs(): expected an integer above 1, but received ${term}`);
   } else {
      const seq = [0, 1];  // base sequence

      for (let i = 0; i < (term - 2); i++) {
         const nextTerm = seq[seq.length - 1] + seq[seq.length - 2];
         seq.push(nextTerm);
      }

      return seq;
   }
}

   // RECURSIVE FUNCTION
function fibsRec(term) {
   if (term < 2 || !Number.isInteger(term)) {
      throw new Error(`Invalid argument for fibs(): expected an integer above 1, but received ${term}`);
   }

   if (term === 2) {
      return [0, 1];
   }

   const seq = fibsRec(term - 1);
   seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
   return seq;
}
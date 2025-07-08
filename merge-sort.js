function mergeHalves(a, b) {
   let mergedSortedHalves = [];

   let i = 0;
   let j = 0;
   while (i <= a.length && j <= b.length) {
      if (i !== a.length && j !== b.length) {
         if (a[i] < b[j]) {
            mergedSortedHalves.push(a[i]);
            i++;
         } else if (a[i] > b[j]) {
            mergedSortedHalves.push(b[j]);
            j++;
         } else {
            mergedSortedHalves.push(a[i]);         // for when the numbers are equal
            i++;
         }
      } else if (i === a.length) {                 // nothing to compare in a
         mergedSortedHalves.push(...b.slice(j));
         break;
      } else if (j === b.length) {                 // nothing to compare in b
         mergedSortedHalves.push(...a.slice(i));
         break;
      }
   }

   return mergedSortedHalves;
}

function mergeSort(array) {
   if (!Array.isArray(array)) {
      throw new Error(
         `Invalid argument for mergeSort(): expected an Array, but received ${typeof(array)}`
      );
   }

      // base case
   if (array.length <= 1) {
      return array;
   }

   const appMiddleIndex = Math.floor(array.length / 2);
   let leftHalf = array.slice(0, appMiddleIndex);
   let rightHalf = array.slice(appMiddleIndex);
   let sortedLeft = mergeSort(leftHalf);
   let sortedRight = mergeSort(rightHalf);
   return mergeHalves(sortedLeft, sortedRight);
}
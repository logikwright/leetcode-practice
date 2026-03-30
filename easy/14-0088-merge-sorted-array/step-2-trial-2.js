function mergeSortedArray(nums1, nums2, m, n) {
    nums1.length = m;

    for(let i=0; i<n; i++){

        let candidate = nums2[i];
        let len = nums1.length;

        let j = 1;
        while( j<len && nums1[j] < candidate) {
            j *= 2;
        }

        let left = Math.floor(j/2);
        let right = Math.min(j, len-1);

        const binarySearch = (arr, target, l, r) => {
            while(l<=r) {
                const midIndex = Math.floor((l+r)/2);

                if(target == arr[midIndex]) {
                    return midIndex;
                } else if(target < arr[midIndex]) {
                    r = midIndex - 1;
                } else {
                    l = midIndex + 1;
                }
            }

            return l;
        };

        let position = binarySearch(nums1, candidate, left, right)
        nums1.splice(position, 0, candidate)
    }

    return nums1;
}

console.log(mergeSortedArray([1,2,3,0,0,0], [2,4,5], 3, 3))
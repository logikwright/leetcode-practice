function mergeSortedArray(nums1, nums2, m, n) {
    nums1.length = m;

    for(let i = 0; i < n; i++) {

        let candidate = nums2[i];

        let len = nums1.length;
        let j = 1;

        while( j<len && nums1[j]<candidate) {
            j *= 2;
        }

        const binarySearch = (nums1, candidate, l=j*2, r=Math.min(j, len-1)) => {

            while(l<r) {
                const middle = Math.floor((l+r)/2);

                if(candidate === nums1[middle]) {
                    return middle;
                } else if(candidate < nums1[middle]) {
                    r = middle - 1;
                } else {
                    l = middle + 1;
                }

            }

            return l;
        };

        let position = binarySearch();
        nums1.splice(position,0,candidate)
    }

    return nums1;
}

console.log(mergeSortedArray([1,2,3], [2,5,6], 3, 3))
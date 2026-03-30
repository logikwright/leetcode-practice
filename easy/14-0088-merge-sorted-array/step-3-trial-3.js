function mergeSortedArray(nums1, nums2, m, n) {
    nums1.length = m;
    
    for(let element of nums2) {
        nums1.push(element);
    }

    return nums1.sort((a,b) => a-b);
}

console.log(mergeSortedArray([1,2,3,0,0,0], [2,5,6], 3, 3))
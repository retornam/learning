function insertionSort (array, n) {
  var i, j;

  for (i = 1; i < n; i++) {
    j = i;
    while ((j > 0) && (s[j] < s[j-1])) {
      swap(&s[j], &s[j-1]);
      j = j - 1;
    }
  }
}

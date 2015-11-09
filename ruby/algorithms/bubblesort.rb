def bubble_sort(arr)
  swapped = true
  length = arr.length-1
  while swapped do
    i = 0
    swapped = false
    while i < length
      n = i + 1
      if arr[i] > arr[n]
        temp = arr[i]
        arr[i]= arr[n]
        arr[n] = temp
        swapped = true
      end
      i+=1
    end
  end
  return arr
end

bubble_sort([4, 1, 2, 6, 8, 3])

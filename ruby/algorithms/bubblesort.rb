def bubble_sort(array)
  swapped = true
  length = array.length-1
  while swapped do
    i = 0
    swapped = false
    while i <length
      n = i +1
      if array[i] > array[n]
        temp = array[i]
        array[i]= array[n]
        array[n] = temp
        swapped = true
      end
      i+=1
    end
  end
  return array
end

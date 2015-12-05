#binary search tree

# go to the mid point of the array. if the midpoint is the key, then exit the function
# if the key is bigger than the mid, cut off the bottom half of the array, & vice versa
# if the key is not in the array,return -1

def binary_search (array, key)
  min = array[0]
  max = array[-1]
  mid = array[-1]/2

  if max < min 
    return -1
  else
    if mid == key
      return mid
    elsif key == min
      return min
    elsif key == max
      return max
    elsif key > mid
      return mid
      min = array[mid + 1]
    else
      max = array[mid - 1]
    end
  end
end

binary_search([1,2,4,5], 4)

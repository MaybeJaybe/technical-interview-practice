# // Given an array of numbers sorted in ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.
# // for example:
# // Input: [4, 6, 10], key=6
# // Output: 1
# // explanation: the smallest number greater than or equal to '6' is 6 having index 1

# Input: [1, 3, 8, 10, 15], key = 12
# Output: 4
# explanation: the smallest number greater than or equal to 12 is 15 having index 4


def search_ceiling(arr, key):
  n = len(arr)
  if key > arr[n - 1]:
    return -1

  start, end = 0, n -1
  while start <= end:
    mid= start + (end - start) // 2
    if key < arr[mid]:
      end = mid - 1
    elif key > arr[mid]:
      start = mid + 1
    else:
      return mid
  return start


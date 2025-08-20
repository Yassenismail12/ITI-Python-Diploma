def kadanes_algorithm(nums):
    #intialize current_sum = 1st element
    current_sum = nums[0]
    #intialize max_sum = 1st_element
    max_sum = nums[0]
    #make the start is 0 index 
    start = 0
    #make the best start is 0 
    best_start = 0
    #make the best_end is 0
    best_end = 0

    #iterate through nums list 
    for i in range(1, len(nums)):
        # check if current element greater than (Extended way) current_sum = nums[i]
        if nums[i] > current_sum + nums[i]:
            #change the current_sum to current element
            current_sum = nums[i]
            #make the start is the current index
            start = i   # restart here
        else:
            #Extend the current_sum (Subarray continues)
            current_sum += nums[i]
        
        #Now we need to maximize the resulted subarray and answer
        #check that current_sum is greater than max_sum 
        if current_sum > max_sum:
            #Update the value of max to this max
            max_sum = current_sum
            #update the best start 
            best_start = start
            #update the best end
            best_end = i

    #after applying logic, return logic
    return max_sum, nums[best_start:best_end+1]


arr = [5,-2,3,4]
print(kadanes_algorithm(arr))  

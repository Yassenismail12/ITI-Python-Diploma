class NumArray:

    def __init__(self, nums):
        self.prefix = [0] * (len(nums) + 1)
        for i in range (len(nums)):
            self.prefix[i+1] = self.prefix[i] + nums[i]

    def sumRange(self, left: int, right: int) -> int:
        return self.prefix[right+1] - self.prefix[left] 


# Your NumArray object will be instantiated and called as such:
nums = [-2, 0, 3, -5, 2, -1]
obj = NumArray(nums)
param_1 = obj.sumRange(0,2)
print(param_1)
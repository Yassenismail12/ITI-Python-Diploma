import math

def main():
    n = int(input())
    group_counts = {1: 0, 2: 0, 3: 0, 4: 0}

    # Count occurrences of each group size
    groups = list(map(int, input().split()))
    for s in groups:
        group_counts[s] += 1

    taxis = 0

    # 1. Groups of 4 each need their own taxi
    taxis += group_counts[4]
    group_counts[4] = 0

    # 2. Pair groups of 3 with groups of 1
    taxis += group_counts[3]
    ones_used_by_threes = min(group_counts[3], group_counts[1])
    group_counts[1] -= ones_used_by_threes
    group_counts[3] = 0

    # 3. Handle groups of 2
    taxis += group_counts[2] // 2
    if group_counts[2] % 2 == 1:   # One group of 2 left
        taxis += 1
        group_counts[1] -= min(2, group_counts[1])  # fill with up to 2 ones

    group_counts[2] = 0

    # 4. Handle remaining groups of 1
    taxis += math.ceil(group_counts[1] / 4)

    print(taxis)


if __name__ == "__main__":
    main()

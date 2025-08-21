def main():
    last = 0
    current = 0
    level = 0
    cubes = int(input())

    while cubes > 0:
        level += 1
        current += 1
        total = level + last
        cubes -= total
        last += current

    if cubes < 0:
        level -= 1

    print(level)


if __name__ == "__main__":
    main()

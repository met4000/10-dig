/*
# Try versing HAI

from random import randint
mode = input("Who would you like to verse? (AI/P): ")
while mode:
  n = ""
  w = -1
  if mode.upper() == "AI":
    print("\nPlayer vs AI:")
    for i in range(10):
      if not i % 2:
        n = n + input("(" + str(i + 1) + ") Player: " + n)
        if n[-1] in n[:-1]:
          print(n[-1] + " has already been used!")
          w = 1
          break
        elif not int(int(n) / (i + 1)) == (int(n) / (i + 1)):
          print(str(int(n)) + " is not divisible by " + str(i + 1) + "!")
          w = 1
          break
        elif n == "0":
          print("Cannot start with 0!")
          w = 1
          break
      else:
        v = []
        for d in [x for x in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] if x not in list(n)]:
          t = int(n + d)
          if int(t / (i + 1)) == t / (i + 1):
            v.append(d)
        if len(v) == 0:
          print("(" + str(i + 1) + ")     AI: " + n + " X")
          print("No possible numbers!")
          w = 0
          break
        d = v[randint(0, len(v) - 1)]
        print("(" + str(i + 1) + ")     AI: " + n + " " + d)
        n = n + d
    if not w == -1:
      print("\nThe " + ["Player", "AI"][w] + " has won!")
    else:
      print("\nYou have almost certainly cheated/hacked the game, as you have drawn with the AI!")
  elif mode.upper() == "HAI":
    if input("ARE YOU SURE YOU WOULD LIKE TO VERSE THE HARDCORE AI? ").upper() == "Y":
      print("\nPlayer vs Hardcore AI:")
      for i in range(10):
        if i % 2:
          n = n + input("(" + str(i + 1) + ") Player: " + n)
          if n[-1] in n[:-1]:
            print(n[-1] + " has already been used!")
            w = 1
            break
          elif not int(int(n) / (i + 1)) == (int(n) / (i + 1)):
            print(str(int(n)) + " is not divisible by " + str(i + 1) + "!")
            w = 1
            break
        else:
          if not i:
            v = ["2", "4", "6", "8"]
          else:
            v = []
            for d in [x for x in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] if x not in list(n)]:
              t = int(n + d)
              if int(t / (i + 1)) == t / (i + 1):
                v.append(d)
            if len(v) == 0:
              print("(" + str(i + 1) + ")    HAI: " + n + " X")
              print("No possible numbers!")
              w = 0
              break
          d = v[randint(0, len(v) - 1)]
          print("(" + str(i + 1) + ")    HAI: " + n + " " + d)
          n = n + d
      if w == 1:
        print("\nThe HAI has (unsurprisingly) won!")
      else:
        print("\nYou have definately cheated/hacked the game, as you not lost to the HAI!")
  elif mode.upper() == "P":
    print("\nPlayer vs Player:")
    for i in range(10):
      n = n + input("(" + str(i + 1) + ") Player " + str(i%2 + 1) + ": " + n)
      if n[-1] in n[:-1]:
        print(n[-1] + " has already been used!")
        w = i % 2
        break
      elif not int(int(n) / (i + 1)) == (int(n) / (i + 1)):
        print(str(int(n)) + " is not divisible by " + str(i + 1) + "!")
        w = i % 2
        break
      elif n == "0":
        print("Cannot start with 0!")
        w = 1
        break
    if not w == -1:
      print("\nPlayer " + str(w + 1) + " has won!")
    else:
      print("\nYou were either cooperating or have cheated/hacked the game, as you have drawn!")
  print()
  mode = input("Who would you like to verse? (AI/P): ")
*/

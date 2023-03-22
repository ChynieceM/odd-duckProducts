## Unique Image Count explanation

1. If you want to display three unique images at once, and there are a total of n images, then the minimum number of unique images needed (u) is:

u = n choose 3 + 1

And the maximum number of clicks that can be made while displaying the maximum number of unique combinations is:

max clicks = (n choose 3) x 3

If the maximum number of clicks is greater than the allowed number of clicks (c), then the unique image count needed is:

u = (c / 3) + 1


2. The expression "n choose 3" represents the number of ways to choose 3 items from a set of n items, where the order of the items does not matter. This is a combination formula, and it is written as:

n choose 3 = n! / (3! * (n-3)!)

Here, "n!" represents the factorial of n, which is the product of all positive integers up to and including n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120.

To understand "n choose 3 + 1," we need to add 1 to the number of combinations of 3 items that can be chosen from a set of n items. So, the formula becomes:

(n choose 3) + 1 = (n! / (3! * (n-3)!)) + 1

This formula calculates the number of ways to choose 3 items from a set of n items, and then adds 1 to that number. The result represents the maximum number of times you can click a button while displaying every possible combination of 3 items from a set of n items, given a limit on the number of clicks allowed.


there needs to be at least 6 because I want to make sure no images are repeated; any less than 6, I could end up with repeats. So to make sure I display every possible combination of 3 unique images, I need at least 6 so I can display 20 different combos w/out repeats. To meet the 25 max amount of clicks, each click shows a new combo of 3 images which means I can only show a max of 75 different combos. Since I can create 20 unique combos with 6 unique images, I should aim for 6.
import turtle

# Define a function to draw a rectangle
def rectangle(horizontal, vertical, color, degree=90):
    t.pendown()
    t.pensize(1)
    t.color(color)
    t.begin_fill()
    for counter in range(1, 3):
        t.forward(horizontal)
        t.right(degree)
        t.forward(vertical)
        t.right(degree)
    t.end_fill()
    t.penup()

# Define a function to animate the robot's arms
def animate_arms(left_arm_x, left_arm_y):
    # Move the left arm up
    t.goto(-150, 110)
    rectangle(left_arm_x, left_arm_y, 'grey')

    # Move the left arm down
    t.goto(-150, 70)
    rectangle(left_arm_x, left_arm_y, 'grey')

    # Move the right arm up
    t.goto(10, 70)
    rectangle(60, 15, 'grey')
    t.goto(55, 110)
    rectangle(15, 40, 'grey', 90)

    # Move the right arm down
    t.goto(10, 70)
    rectangle(60, 15, 'grey')
    t.goto(55, 70)
    rectangle(15, 40, 'grey', 90)

# Set up the screen
t = turtle.Turtle()
t.penup()
t.shape("classic")
t.speed('slow')
#t.bgcolor('green')
#t.title("Multiverse")

# Draw the robot's feet
t.goto(-100, -150)
rectangle(50, 20, 'blue')
t.goto(-30, -150)
rectangle(50, 20, 'blue')

# Draw the robot's legs
t.goto(-25, -50)
rectangle(15, 100, 'grey')
t.goto(-55, -50)
rectangle(-15, 100, 'grey')

# Draw the robot's body
t.goto(-90, 100)
rectangle(100, 150, 'red')

# Draw the robot's neck
t.goto(-50, 120)
rectangle(15, 20, 'grey')

# Draw the robot's head
t.goto(-85, 170)
rectangle(80, 50, 'red')

# Draw the robot's eyes
t.goto(-60, 160)
rectangle(30, 10, 'white')
t.goto(-55, 155)
rectangle(5, 5, 'black')
t.goto(-40, 155)
rectangle(5, 5, 'black')

# Animate the robot's arms
while True:
    animate_arms(15, 40)

t.mainloop()

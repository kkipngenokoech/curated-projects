import turtle as t
def rectangle(horizontal, vertical, color, degree = 90):
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

t.penup()
t.shape("classic")
t.speed('slow')
t.bgcolor('green')
t.title("Multiverse")
# feet
t.goto(-100, -150)
rectangle(50, 20,'blue')
t.goto(-30, -150)
rectangle(50, 20, 'blue')
# legs
t.goto(-25, -50)
rectangle(15, 100, 'grey')
t.goto(-55, -50)
rectangle(-15, 100, 'grey')
# body
t.goto(-90, 100)
rectangle(100, 150, 'red')
# arms
def draw_arms(left_arm_x, left_arm_y):#, left_coord_X, left_coord_Y):
    t.goto(-150, 70)
    rectangle(60, 15, 'grey')
    t.goto(-150, 110)
    rectangle(left_arm_x, left_arm_y, 'grey')
    t.goto(10, 70)
    rectangle(60, 15, 'grey')
    t.goto(55, 110)
    # rectangle(15, 40,90, 'grey')
    rectangle(15, 40,'grey', 90)
# draw_arms()
# neck
t.goto(-50, 120)
rectangle(15, 20, 'grey')
# head
t.goto(-85, 170)
rectangle(80, 50, 'red')
# eyes
t.goto(-60, 160)
rectangle(30, 10, 'white')
t.goto(-55, 155)
rectangle(5, 5, 'black')
t.goto(-40, 155)
rectangle(5, 5, 'black')

draw_arms(15,40)
t.mainloop()
# Import the Pygame library
import pygame

# Initialize Pygame
pygame.init()

# Define the size of the window
window_width = 800
window_height = 600

# Create the window
window = pygame.display.set_mode((window_width, window_height))

# Define the initial position and size of the robot's body
body_x = 100
body_y = 100
body_width = 50
body_height = 100

# Define the initial position and size of the robot's arms
arm1_x = 75
arm1_y = 100
arm1_width = 25
arm1_height = 50

arm2_x = 150
arm2_y = 100
arm2_width = 25
arm2_height = 50

# Define the initial position and size of the robot's legs
leg1_x = 75
leg1_y = 150
leg1_width = 25
leg1_height = 50

leg2_x = 150
leg2_y = 150
leg2_width = 25
leg2_height = 50

# Define the colors for the robot
body_color = (255, 0, 0) # red
arm_color = (0, 255, 0) # green
leg_color = (0, 0, 255) # blue

# Draw the robot
pygame.draw.rect(window, body_color, (body_x, body_y, body_width, body_height))
pygame.draw.rect(window, arm_color, (arm1_x, arm1_y, arm1_width, arm1_height))
pygame.draw.rect(window, arm_color, (arm2_x, arm2_y, arm2_width, arm2_height))
pygame.draw.rect(window, leg_color, (leg1_x, leg1_y, leg1_width, leg1_height))
pygame.draw.rect(window, leg_color, (leg2_x, leg2_y, leg2_width, leg2_height))

# Update the window
pygame.display.update()

# Keep the window open until it is closed by the user
while True:
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      pygame.quit()
      exit()

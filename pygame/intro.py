import pygame
# successes, failures = pygame.init()
# print("{} successes and {} failures".format(successes, failures))

# screen = pygame.display.set_mode((720,480))

# pygame.display.set_caption('Name')
# pygame.display.update()
background_color = (255,255,255)
(width, height) = (1000, 2000) # screen size
color = ( 0, 0, 0) # for rectangle
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption('Drawing Rectangle')
screen.fill(background_color)
pygame.draw.rect(screen, color, (100,50, 30, 40), 1)
pygame.display.update()

# loop
running = True
while(running):
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
            pygame.quit()


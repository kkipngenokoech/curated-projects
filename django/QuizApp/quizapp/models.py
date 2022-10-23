from pyexpat import model
from django.db import models

# Create your models here.
class QuestionModel(models.Model):
    question = models.CharField(max_length=200,nul=True)
    option_one = models.CharField(max_length=200,nul=True)
    option_two = models.CharField(max_length=200,nul=True)
    option_three = models.CharField(max_length = 200,nul = True)
    option_four = models.CharField(max_length = 200,nul = True)
    answer = models.CharField(max_length = 200,nul = True)
    def __str__ (self):
        return self.question
        
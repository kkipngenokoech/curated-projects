# Quiz App

1.create a directory `mkdir QuizApp`
2. cd into your directory
3. create an environment `pipenv install django`. pre-requisite is that you have pipenv installed in your local machine.
4. activate the environment `pipenv shell`.
5. we need to start a [django project](./quiz/) `django-admin startproject quiz .`
6. now create a [quizapp](./quizapp/) `django-admin startapp quizapp .`.
7. add our [app](./quizapp/) as list of installed apps in the project-level [settings.py](./quiz/settings.py) `django.apps.QuizAppConfig`.
8. link urls from the [project-level](./quiz/urls.py) to the ones in [app-level](./quizapp/urls.py)
    - this is what goes into your [project-level](./quiz/urls.py) `path('',include(quizapp.urls'))`.
    - this is what goes into your [app-level](./quizapp/urls.py) `path('',index, name = 'home')
9. check also [view](./quizapp/views.py) for the definition of the view.

## making migrations

`python manage.py makemigrations`
`python manage.py migrate`

## models -> admins

when one creates a django model he/she has to register it at the [admin.py](quizapp/admin.py)
`Admin.site.register(nameofyourmodel)`

## creating superuser and viewing in Admin

`python manage.py createsuperuser`

## redirecting your templates to project level directory

`'DIRS': [os.path.join(BASE_DIR,'templates')],` in your [settings.py](quiz/settings.py)
mkdir [template](templates/) in your project-level directory
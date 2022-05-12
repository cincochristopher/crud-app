<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Todo App</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  </head>
  <body>
    <div>
      <div id="app">
      </div>
      <script>
          window.Laravel = <?php echo json_encode(['csrfToken' => csrf_token() ]); ?>
      </script>
      <script src="{{asset('js/app.js')}}"></script>
    </div>
  </body>
</html>
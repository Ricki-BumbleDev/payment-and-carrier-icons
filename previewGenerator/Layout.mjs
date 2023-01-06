const Layout = content => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>Payment & Carrier Icons</title>
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        background-color: rgb(13, 17, 23);
        color: white;
        font-family: system-ui, sans-serif;
        margin: 10px;
      }

      .icons {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        width: 700px;
      }

      .icon {
        display: block;
        width: 100px;
      }
    </style>
  </head>
  
  <body>
    ${content}
  </body>
</html>`;

export default Layout;
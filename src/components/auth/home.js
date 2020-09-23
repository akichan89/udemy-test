<html>
	<head>
		<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">

	</head>

	<body>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">Sample Store</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    	<span class="navbar-toggler-icon"></span>
		  	</button>
		 	<div class="collapse navbar-collapse" id="navbarNav">
			    <ul class="navbar-nav">
			    	<li class="nav-item active">
			        	<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
			    	</li>
			    	<li class="nav-item">
			        	<a class="nav-link" href="#">Features</a>
			    	</li>
			    </ul>
		  	</div>
		</nav>



		<div class="container">
			<h1>Welcome to my sample store!</h1>
			<form action="/register" method="post">
				<input type="text" name="email" placeholder="Email" /><br />
				<input type="password" name="password" placeholder="Password" /><br />
				<input type="submit" value="Sign Up" />
			</form>
			<h2>Login</h2>
			<form action="/login" method="post">
				<input type="text" name="email" placeholder="Email" /><br />
				<input type="password" name="password" placeholder="Password" /><br />
				<input type="submit" value="Log In" />
			</form>

			<h2>Forgot Password?</h2>
			<form action="/account/resetpassword" method="post">
				<input type="text" name="email" placeholder="Enter Your Email" /><br />
				<input type="submit" value="Submit" />
			</form>
		</div>




</head>

</html>
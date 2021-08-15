import React from 'react'

export default function Header() {
    return (
        <div>
            <header>
	<div class="container">
		<div class="header d-lg-flex justify-content-between align-items-center">
			<div class="header-agile">
				<h1>
					<a class="navbar-brand logo" href="index.html">
						<span class="fa fa-scissors" aria-hidden="true" ></span> Men spa	<span class="fa fa-user-secret" aria-hidden="true" ></span>
					</a>
				</h1>
			</div>
			<div class="nav_w3ls">
				<nav>
					<label for="drop" class="toggle mt-lg-0 mt-1"><span class="fa fa-bars" aria-hidden="true"></span></label>
					<input type="checkbox" id="drop" />
						<ul class="menu">
							<li class="mr-lg-3 mr-2 active"><a href="index.html">Home</a></li>
							<li class="mr-lg-3 mr-2"><a href="about.html">About </a></li>
							<li class="mr-lg-3 mr-2 p-0">						
							<label for="drop-2" class="toggle">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span> </label>
							<a href="#">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span></a>
							<input type="checkbox" id="drop-2"/>
							<ul class="inner-dropdown">
								<li><a href="services.html">What We Do</a></li>
								<li><a href="single.html">See more</a></li>
							</ul>
							</li>
							<li class="mr-lg-3 mr-2"><a href="gallery.html">Gallery</a></li>
							<li class="mr-lg-3 mr-2"><a href="contact.html">Contact Us</a></li>
							

						</ul>
				</nav>
			</div>

		</div>
	</div>
</header>
        </div>
    )
}

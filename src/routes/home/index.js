import * as React from 'preact';
import { Link } from 'react-router-dom';

import { Card, CardActions, Button, CardMedia } from "@material-ui/core"

const Home = () => {
	if (localStorage.getItem("needRefresh")) {
		localStorage.clear();
		window.location.reload()
	}

	return (
		<div style={{
			padding: "20px",
			minHeight: "100%",
			width: "100%"
		}}>
			<h1>Home</h1>
			<p>Choose your meme lord.</p>
			<div class="masonry">
				<div class="brick">
					<Link style={{ textDecoration: "none", color: "black" }} activeClassName="active" href="/meme/isma">
						<Card style={{ display: "inline-block", width: "100%" }}>
							<div className="card-header">
								<div style={{ textAlign: "center" }}>
									<h2 className="centered mdc-typography--title">Ismamelle</h2>
									<div className="mdc-typography--caption"><img style={{ width: "100%" }} src="/assets/img/isma.jpg" /></div>
								</div>
							</div>
							<CardMedia className="card-media" />
							<CardActions>
								<Button>
									I Choose You
								</Button>
								<Button>
									Share
								</Button>
							</CardActions>
						</Card>
					</Link>
				</div>
				<div class="brick">
					<Link style={{ textDecoration: "none", color: "black" }} activeClassName="active" href="/meme/kosta">
						<Card style={{ display: "inline-block", width: "100%" }}>
							<div className="card-header">
								<div style={{ textAlign: "center" }}>
									<h2 className="centered mdc-typography--title">Kosthacker</h2>
									<div className="mdc-typography--caption"><img style={{ width: "100%" }} src="/assets/img/kosta.jpg" /></div>
								</div>
							</div>
							<CardMedia className="card-media" />
							<CardActions>
								<Button>
									I Choose You
								</Button>
								<Button>
									Share
								</Button>
							</CardActions>
						</Card>
					</Link>
				</div>
				<div class="brick">
					<Link style={{ textDecoration: "none", color: "black" }} activeClassName="active" href="/meme/gus">
						<Card style={{ display: "inline-block", width: "100%" }}>
							<div className="card-header">
								<div style={{ textAlign: "center" }}>
									<h2 className="centered mdc-typography--title">Gus</h2>
									<div className="mdc-typography--caption"><img style={{ width: "100%" }} src="/assets/img/gus.jpg" /></div>
								</div>
							</div>
							<CardMedia className="card-media" />
							<CardActions>
								<Button>
									I Choose You
								</Button>
								<Button>
									Share
								</Button>
							</CardActions>
						</Card>
					</Link>
				</div>
				<div class="brick">
					<Link style={{ textDecoration: "none", color: "black" }} activeClassName="active" href="/meme/nate">
						<Card style={{ display: "inline-block", width: "100%" }}>
							<div className="card-header">
								<div style={{ textAlign: "center" }}>
									<h2 className="centered mdc-typography--title">A Bald guy</h2>
									<div className="centered mdc-typography--caption"><img style={{ width: "100%" }} src="/assets/img/nate.jpg" /></div>
								</div>
							</div>
							<CardMedia className="card-media" />
							<CardActions>
								<Button>
									I Choose You
								</Button>
								<Button>
									Share
								</Button>
							</CardActions>
						</Card>
					</Link>
				</div>
				<div class="brick">
					<Link style={{ textDecoration: "none", color: "black" }} activeClassName="active" href="/meme/shai">
						<Card style={{ display: "inline-block", width: "100%" }}>
							<div className="card-header">
								<div style={{ textAlign: "center" }}>
									<h2 className="centered mdc-typography--title">A random shai</h2>
									<div className="centered mdc-typography--caption"><img style={{ width: "100%" }} src="/assets/img/shai.jpg" /></div>
								</div>
							</div>
							<CardMedia className="card-media" />
							<CardActions>
								<Button>
									I Choose You
								</Button>
								<Button>
									Share
								</Button>
							</CardActions>
						</Card>
					</Link>
				</div>
			</div>
		</div>
	)
};

export default Home;

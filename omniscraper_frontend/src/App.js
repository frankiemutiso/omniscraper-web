import React, { Suspense, Component } from 'react';
import createTheme from '@mui/material/styles/createTheme';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Toolbar from '@mui/material/Toolbar';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import createHistory from 'history/createBrowserHistory';
import axios from 'axios';
import { axiosInstance } from './utils/axiosInstance';
import Nav from './components/Nav';
import Login from './pages/Login';
import FlagRequests from './pages/FlagRequests';
import ProtectedComponent from './components/ProtectedComponent';
import DotPulse from './components/reusableComponents/DotPulse';

const Video = React.lazy(() => import('./pages/Video'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const FilteredVideos = React.lazy(() => import('./pages/FilteredVideos'));

const theme = createTheme({
	typography: {
		fontFamily: ['Plus Jakarta Sans', 'Sora'].join(','),
	},
	palette: {
		primary: {
			main: '#0071E3',
		},
		secondary: {
			main: '#FF2626',
		},
		delete: {
			main: '#cf0000',
		},
		white: { main: '#fff' },
	},
});

const history = createHistory();

history.listen((location) => {
	window.ga('set', 'page', location.pathname + location.search);
	window.ga('send', 'pageview');
});

class App extends Component {
	state = {
		username: '',
		password: '',
		loggedIn:
			typeof window !== 'undefined'
				? localStorage.getItem('access_token')
					? true
					: false
				: null,
		loginLoading: false,
		error: null,
		tagsLoading: false,
		videoTags: [],
		videosLoadingError: false,
		loading: false,
		offset: 0,
		limit: 12,
		videos: [],
		hasMore: true,
		scrollPosition: 0,
		autoplayVideo: false,
		successfulLogin: false,
		trendingVideos: [],
		trendingVideosLoading: false,
	};

	componentDidMount = async () => {
		window.ga('create', 'UA-190601275-1', 'auto');
		window.ga('send', 'pageview');

		await this.loadTags();
		// await this.loadVideos();
		await this.loadTrendingVideos();
	};

	loadVideos = () => {
		this.setState({ loading: true }, () => {
			const { offset, limit } = this.state;

			const url = `/api/videos/?limit=${limit}&offset=${offset}`;

			axios
				.get(url)
				.then((res) => {
					const newVideos = res.data.videos;
					const hasMore = res.data.has_more;

					this.setState({
						hasMore,
						loading: false,
						videos: [...this.state.videos, ...newVideos],
						offset: offset + limit,
					});
				})
				.catch((err) => {
					this.setState({
						videosLoadingError: err.message,
						loading: false,
					});
				});
		});
	};

	loadTags = () => {
		this.setState({ tagsLoading: true }, () => {
			const url = '/api/tags/';

			axios
				.get(url)
				.then((res) => {
					const newTags = res.data.tags;

					this.setState({
						videoTags: newTags,
						tagsLoading: false,
					});
				})
				.catch((err) => {
					this.setState({
						tagsLoading: false,
					});
				});
		});
	};

	loadTrendingVideos = () => {
		const url = '/api/trending/';
		this.setState({ trendingVideosLoading: true }, () => {
			axios
				.get(url)
				.then((res) => {
					const trendingVideos = res.data.trending_videos;

					this.setState({
						trendingVideos: trendingVideos,
						trendingVideosLoading: false,
					});
				})
				.catch((err) => {});
		});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleLogin = (e) => {
		const { handleRedirectionDelay } = this;
		const { username, password } = this.state;
		e.preventDefault();

		this.setState({ loginLoading: true }, () => {
			axiosInstance
				.post('token/obtain/', {
					username,
					password,
				})
				.then((response) => {
					if (response.status === 200) {
						axiosInstance.defaults.headers['Authorization'] =
							'JWT ' + response.data.access;

						localStorage.setItem('access_token', response.data.access);
						localStorage.setItem('refresh_token', response.data.refresh);

						this.setState(
							{
								successfulLogin: true,
								loginLoading: false,
								error: null,
							},
							handleRedirectionDelay()
						);
					} else {
						this.setState({
							loggedIn: false,
							loginLoading: false,
							username: '',
							password: '',
							error: response.statusText,
						});
					}
				})
				.catch((error) => {
					const errorMessage = error.response.data.detail;
					this.setState({
						loggedIn: false,
						loginLoading: false,
						error: errorMessage,
					});
				});
		});
	};

	handleRedirectionDelay = () => {
		setTimeout(
			() =>
				this.setState({
					username: '',
					password: '',
					error: null,
					loggedIn: true,
				}),
			2500
		);
	};

	handleLogout = () => {
		axiosInstance
			.post('blacklist/', {
				refresh_token: localStorage.getItem('refresh_token'),
			})
			.then((response) => {
				if (response.status === 205) {
					localStorage.removeItem('access_token');
					localStorage.removeItem('refresh_token');
					axiosInstance.defaults.headers['Authorization'] = null;
					this.setState({ loggedIn: false });
				}
			})
			.catch((e) => {
				localStorage.removeItem('access_token');
				localStorage.removeItem('refresh_token');
				axiosInstance.defaults.headers['Authorization'] = null;
				this.setState({ loggedIn: false });
			});
	};

	handleScrollPosition = () => {
		this.setState({
			autoplayVideo: true,
			scrollPosition: window.pageYOffset,
		});
	};

	render() {
		const {
			handleChange,
			handleLogin,
			handleLogout,
			loadTags,
			loadVideos,
			handleScrollPosition,
		} = this;
		const {
			username,
			password,
			error,
			loggedIn,
			loginLoading,
			videoTags,
			tagsLoading,
			successfulLogin,
			videosLoadingError,
			loading,
			hasMore,
			videos,
			scrollPosition,
			autoplayVideo,
			trendingVideos,
			trendingVideosLoading,
		} = this.state;

		return (
			<>
				<Toolbar />
				<StyledEngineProvider injectFirst>
					<ThemeProvider theme={theme}>
						<Router history={history}>
							<div>
								<Suspense
									fallback={
										<div
											style={{
												height: '100vh',
												display: 'grid',
												placeItems: 'center',
											}}
										>
											<DotPulse />
										</div>
									}
								>
									<Nav loggedIn={loggedIn} handleLogout={handleLogout} />

									<Switch>
										{loggedIn ? <Redirect from='/login' to='/' /> : ''}
										<Route
											exact
											path='/'
											render={(props) => (
												<Home
													{...props}
													// loadVideos={loadVideos}
													scrollPosition={scrollPosition}
													handleScrollPosition={handleScrollPosition}
												/>
											)}
										/>

										<Route
											path='/tags/:slug'
											render={(props) => (
												<FilteredVideos
													{...props}
													videoTags={videoTags}
													loggedIn={loggedIn}
													tagsLoading={tagsLoading}
													loadTags={loadTags}
													scrollPosition={scrollPosition}
													handleScrollPosition={handleScrollPosition}
												/>
											)}
										/>

										<Route
											path='/login'
											render={(props) => (
												<Login
													{...props}
													username={username}
													password={password}
													loginLoading={loginLoading}
													error={error}
													handleChange={handleChange}
													handleSubmit={handleLogin}
													successfulLogin={successfulLogin}
												/>
											)}
										/>
										<Route
											path='/flag-requests'
											render={() => (
												<ProtectedComponent loggedIn={loggedIn}>
													<FlagRequests />
												</ProtectedComponent>
											)}
										/>
										<Route
											path='/:slug'
											render={() => (
												<Video
													trendingVideosLoading={trendingVideosLoading}
													autoplayVideo={autoplayVideo}
													loggedIn={loggedIn}
													trendingVideos={trendingVideos}
												/>
											)}
										/>
									</Switch>
								</Suspense>
							</div>
						</Router>
					</ThemeProvider>
				</StyledEngineProvider>
			</>
		);
	}
}

export default App;

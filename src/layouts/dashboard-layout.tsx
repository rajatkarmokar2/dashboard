/** @format */
import { FC, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import DashboardFooter from '../components/dashboard-footer/dashboard-footer'

const DashbaordLayout: FC<any> = ({ children }) => {
	const sidebarToggle = useRef<any>()
	const body = useRef<any>()

	useEffect(() => {
		// Toggle the side navigation
		if (sidebarToggle && body) {
			// Uncomment Below to persist sidebar toggle between refreshes
			// if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
			//     document.body.classList.toggle('sb-sidenav-toggled');
			// }
			console.log(sidebarToggle.current)

			sidebarToggle.current.addEventListener('click', (event: any) => {
				event.preventDefault()
				body.current.classList.toggle('sb-sidenav-toggled')
				localStorage.setItem(
					'sb|sidebar-toggle',
					body.current.classList.contains('sb-sidenav-toggled')
				)
			})
		}
	})

	return (
		<div ref={body} className='sb-nav-fixed'>
			<nav className='sb-topnav navbar navbar-expand navbar-dark bg-dark'>
				{/* Navbar Brand*/}
				<a className='navbar-brand ps-3' href='index.html'>
					Start Bootstrap
				</a>
				{/* Sidebar Toggle*/}
				<button
					className='btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0'
					ref={sidebarToggle}
					id='sidebarToggle'>
					<i className='fas fa-bars' />
				</button>
				{/* Navbar Search*/}
				<form className='d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0'>
					<div className='input-group'>
						<input
							className='form-control'
							type='text'
							placeholder='Search for...'
							aria-label='Search for...'
							aria-describedby='btnNavbarSearch'
						/>
						<button className='btn btn-primary' id='btnNavbarSearch' type='button'>
							<i className='fas fa-search' />
						</button>
					</div>
				</form>
				{/* Navbar*/}
				<ul className='navbar-nav ms-auto ms-md-0 me-3 me-lg-4'>
					<li className='nav-item dropdown'>
						<a
							className='nav-link dropdown-toggle'
							id='navbarDropdown'
							href='#'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'>
							<i className='fas fa-user fa-fw' />
						</a>
						<ul className='dropdown-menu dropdown-menu-end' aria-labelledby='navbarDropdown'>
							<li>
								<a className='dropdown-item'>Settings</a>
							</li>
							<li>
								<a className='dropdown-item'>Activity Log</a>
							</li>
							<li>
								<hr className='dropdown-divider' />
							</li>
							<li>
								<a className='dropdown-item'>Logout</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<div id='layoutSidenav'>
				<div id='layoutSidenav_nav'>
					<nav className='sb-sidenav accordion sb-sidenav-dark' id='sidenavAccordion'>
						<div className='sb-sidenav-menu'>
							<div className='nav'>
								<div className='sb-sidenav-menu-heading'>Core</div>
								<a className='nav-link' href='index.html'>
									<div className='sb-nav-link-icon'>
										<i className='fas fa-tachometer-alt' />
									</div>
									Dashboard
								</a>
								<div className='sb-sidenav-menu-heading'>Interface</div>
								<a
									className='nav-link collapsed'
									href='#'
									data-bs-toggle='collapse'
									data-bs-target='#collapseLayouts'
									aria-expanded='false'
									aria-controls='collapseLayouts'>
									<div className='sb-nav-link-icon'>
										<i className='fas fa-columns' />
									</div>
									Layouts
									<div className='sb-sidenav-collapse-arrow'>
										<i className='fas fa-angle-down' />
									</div>
								</a>
								<div
									className='collapse'
									id='collapseLayouts'
									aria-labelledby='headingOne'
									data-bs-parent='#sidenavAccordion'>
									<nav className='sb-sidenav-menu-nested nav'>
										<a className='nav-link' href='layout-static.html'>
											Static Navigation
										</a>
										<a className='nav-link' href='layout-sidenav-light.html'>
											Light Sidenav
										</a>
									</nav>
								</div>
								<a
									className='nav-link collapsed'
									href='#'
									data-bs-toggle='collapse'
									data-bs-target='#collapsePages'
									aria-expanded='false'
									aria-controls='collapsePages'>
									<div className='sb-nav-link-icon'>
										<i className='fas fa-book-open' />
									</div>
									Pages
									<div className='sb-sidenav-collapse-arrow'>
										<i className='fas fa-angle-down' />
									</div>
								</a>
								<div
									className='collapse'
									id='collapsePages'
									aria-labelledby='headingTwo'
									data-bs-parent='#sidenavAccordion'>
									<nav
										className='sb-sidenav-menu-nested nav accordion'
										id='sidenavAccordionPages'>
										<a
											className='nav-link collapsed'
											href='#'
											data-bs-toggle='collapse'
											data-bs-target='#pagesCollapseAuth'
											aria-expanded='false'
											aria-controls='pagesCollapseAuth'>
											Authentication
											<div className='sb-sidenav-collapse-arrow'>
												<i className='fas fa-angle-down' />
											</div>
										</a>
										<div
											className='collapse'
											id='pagesCollapseAuth'
											aria-labelledby='headingOne'
											data-bs-parent='#sidenavAccordionPages'>
											<nav className='sb-sidenav-menu-nested nav'>
												<NavLink className='nav-link' to='/login'>
													Login
												</NavLink>
												<NavLink className='nav-link' to='/register'>
													Register
												</NavLink>
												<NavLink className='nav-link' to='/forgot-password'>
													Forgot Password
												</NavLink>
											</nav>
										</div>
										<a
											className='nav-link collapsed'
											href='#'
											data-bs-toggle='collapse'
											data-bs-target='#pagesCollapseError'
											aria-expanded='false'
											aria-controls='pagesCollapseError'>
											Error
											<div className='sb-sidenav-collapse-arrow'>
												<i className='fas fa-angle-down' />
											</div>
										</a>
										<div
											className='collapse'
											id='pagesCollapseError'
											aria-labelledby='headingOne'
											data-bs-parent='#sidenavAccordionPages'>
											<nav className='sb-sidenav-menu-nested nav'>
												<a className='nav-link' href='401.html'>
													401 Page
												</a>
												<a className='nav-link' href='404.html'>
													404 Page
												</a>
												<a className='nav-link' href='500.html'>
													500 Page
												</a>
											</nav>
										</div>
									</nav>
								</div>
								<div className='sb-sidenav-menu-heading'>Addons</div>
								<a className='nav-link' href='charts.html'>
									<div className='sb-nav-link-icon'>
										<i className='fas fa-chart-area' />
									</div>
									Charts
								</a>
								<a className='nav-link' href='tables.html'>
									<div className='sb-nav-link-icon'>
										<i className='fas fa-table' />
									</div>
									Tables
								</a>
							</div>
						</div>
						<div className='sb-sidenav-footer'>
							<div className='small'>Logged in as:</div>
							Start Bootstrap
						</div>
					</nav>
				</div>
				<div id='layoutSidenav_content'>
					<main>{children}</main>
					<DashboardFooter/>
				</div>
			</div>
		</div>
	)
}

export default DashbaordLayout

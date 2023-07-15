/** @format */

import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type Inputs = {
	email: string
	password: string
	remember: false
}

const Login: FC = () => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data)
		navigate('/dashboard')
	}

	return (
		<div className='bg-primary'>
			<div id='layoutAuthentication'>
				<div id='layoutAuthentication_content'>
					<main>
						<div className='container'>
							<div className='row justify-content-center'>
								<div className='col-lg-5'>
									<div className='card shadow-lg border-0 rounded-lg mt-5'>
										<div className='card-header'>
											<h3 className='text-center font-weight-light my-4'>Login</h3>
										</div>
										<div className='card-body'>
											<form onSubmit={handleSubmit(onSubmit)}>
												<div className='form-floating mb-3'>
													<input
														className={`form-control ${errors.email && 'is-invalid'}`}
														type='email'
														placeholder=''
														{...register('email', { required: 'Email is required' })}
													/>
													<label htmlFor='inputEmail'>Email address</label>
													<small className='invalid-feedback'>
														{errors.email?.message}
													</small>
												</div>
												<div className='form-floating mb-3'>
													<input
														className={`form-control ${errors.email && 'is-invalid'}`}
														type='password'
														placeholder=''
														{...register('password', {
															required: 'Password is required',
														})}
													/>
													<label htmlFor='inputPassword'>Password</label>
													<small className='invalid-feedback'>
														{errors.password?.message}
													</small>
												</div>
												<div className='form-check mb-3'>
													<input
														className='form-check-input'
														id='inputRememberPassword'
														type='checkbox'
														defaultValue=''
														{...register('remember', { required: false })}
													/>
													<label
														className='form-check-label'
														htmlFor='inputRememberPassword'>
														Remember Password
													</label>
												</div>
												<div className='d-flex align-items-center justify-content-between mt-4 mb-0'>
													<a className='small' href='password.html'>
														Forgot Password?
													</a>
													<button className='btn btn-primary' type='submit'>
														Login
													</button>
												</div>
											</form>
										</div>
										<div className='card-footer text-center py-3'>
											<div className='small'>
												<a href='register.html'>Need an account? Sign up!</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
				<div id='layoutAuthentication_footer'>
					<footer className='py-4 bg-light mt-auto'>
						<div className='container-fluid px-4'>
							<div className='d-flex align-items-center justify-content-between small'>
								<div className='text-muted'>Copyright © Your Website 2023</div>
								<div>
									<a href='#'>Privacy Policy</a>·<a href='#'>Terms &amp; Conditions</a>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</div>
	)
}

export default Login

import { useState } from 'react';
const axios = require('axios').default;

export const AddStudent = () => {
	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		email: '',
		gender: '',
		age: 0,
		tenth_score: 0,
		twelth_score: 0,
		preferred_branch: '',
	});

	const handelchange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		axios.post('http://localhost:8080/students', user)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		
	};
	return (
		<form className="addstudent" onSubmit={handleSubmit}>
			<div>
				Firstname:{' '}
				<input
					type="text"
					name="first_name"
					className="first_name"
					placeholder="enter first name"
					onChange={handelchange}
				/>
			</div>
			<div>
				{' '}
				Last Name:
				<input
					type="text"
					name="last_name"
					className="last_name"
					placeholder="enter last name"
					onChange={handelchange}
				/>
			</div>
			<div>
				{' '}
				Email:
				<input
					type="email"
					name="email"
					className="email"
					placeholder="enter email"
					onChange={handelchange}
				/>
			</div>

			<div>
				Gender:{' '}
				{/* NOTE: radio boxes only work when they have same `name`. */}
				<div>
					Male
					<input
						name="gender"
						className="male"
						type="radio"
						value={'male'}
						onChange={handelchange}
					/>{' '}
					Female{' '}
					<input
						name="gender"
						className="female"
						type="radio"
						value={'female'}
						onChange={handelchange}
					/>
				</div>
			</div>
			<div>
				Age{' '}
				<input
					type="number"
					name="age"
					className="age"
					placeholder="enter age"
					onChange={handelchange}
				/>
			</div>
			<div>
				Tenth Score:{' '}
				<input
					type="number"
					name="tenth_score"
					className="tenth_score"
					placeholder="enter 10th score"
					onChange={handelchange}
				/>{' '}
			</div>
			<div>
				Twelth Score:{' '}
				<input
					type="number"
					name="twelth_score"
					className="twelth_score"
					placeholder="enter 12th score"
					onChange={handelchange}
				/>{' '}
			</div>
			<div>
				<select
					value={''} // select dropdown needs both value and onChange attributes
					name="preferred_branch"
					className="preferred_branch"
					onChange={handelchange}
				>
					<option value="law">law</option>
					<option value="commerce">commerce</option>
					<option value="science">science</option>
					<option value="sports">sports</option>
					<option value="arts">arts</option>
					<option value="acting">acting</option>
				</select>
			</div>

			<input className="submit" type="submit" value="Submit" />
			{
				// <div className="error"></div>
				// show this div with proper error before submitting form, if there's anything not provided
				// eg: first name missing, age cannot be greater than 100 etc
			}
		</form>
	);
};

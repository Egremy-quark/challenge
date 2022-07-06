import { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import FContacto from './FContacto';
import FMailNumber from './FMailNumber';
import FNacimiento from './FNacimiento';
import Title from './Title';

//! Contacto almacenado en el localStorage
const contact = JSON.parse(localStorage.getItem('informationUser'));

const Form = () => {
	const {
		nombre,
		segundoNombre,
		apellidoPaterno,
		apellidoMaterno,
		...setFullName
	} = useContactName();

	const { day, month, year, ...setBirthday } = useContactBirthday();

	const { phone, mail, ...setUserContact } = useContactConnect();

	const handleSubmit = e => {
		e.preventDefault();
		localStorage.setItem(
			'informationUser',
			JSON.stringify({
				nombre,
				segundoNombre: segundoNombre || null,
				apellidoPaterno,
				apellidoMaterno,
				mail,
				phone,
				day,
				month,
				year
			})
		);
		Swal.fire('Buen trabajo!', 'Tu información ha sido almacenada', 'success');
	};

	return (
		<Formulario onSubmit={handleSubmit}>
			<Title />
			<FContacto
				nombre={nombre}
				segundoNombre={segundoNombre}
				apellidoPaterno={apellidoPaterno}
				apellidoMaterno={apellidoMaterno}
				{...setFullName}
			/>
			<FNacimiento day={day} month={month} year={year} {...setBirthday} />
			<FMailNumber phone={phone} mail={mail} {...setUserContact} />
			{nombre &&
				apellidoPaterno &&
				apellidoMaterno &&
				day &&
				month &&
				year &&
				mail &&
				phone && (
					<div>
						<Aviso>Si tus datos son correctos, por favor, continuemos.</Aviso>
						<Click onSubmit={handleSubmit}> Iniciar </Click>
						<Success>
							{`Fecha de nacimiento: ${day} ${month} ${year} `}
							<br />
							{`Correo electrónico: ${mail} `}
							<br />
							{`Teléfono celular: ${phone} `}
							<br />
							{`Nombre: ${nombre} ${segundoNombre} ${apellidoPaterno} ${apellidoMaterno} `}
						</Success>
					</div>
				)}
		</Formulario>
	);
};

export default Form;

const useContactName = () => {
	const [fullName, setFullName] = useState({
		nombre: '' || contact.nombre,
		segundoNombre: '' || contact.segundoNombre || '',
		apellidoPaterno: '' || contact.apellidoPaterno,
		apellidoMaterno: '' || contact.apellidoMaterno
	});

	const setNombre = nombre => {
		setFullName({
			...fullName,
			nombre
		});
	};

	const setSegundoNombre = segundoNombre => {
		setFullName({
			...fullName,
			segundoNombre
		});
	};

	const setApellidoPaterno = apellidoPaterno => {
		setFullName({
			...fullName,
			apellidoPaterno
		});
	};

	const setApellidoMaterno = apellidoMaterno => {
		setFullName({
			...fullName,
			apellidoMaterno
		});
	};

	return {
		...fullName,
		setNombre,
		setSegundoNombre,
		setApellidoPaterno,
		setApellidoMaterno
	};
};

const useContactBirthday = () => {
	const [birthday, setBirthday] = useState({
		day: '',
		month: '',
		year: ''
	});

	const setDay = day => {
		setBirthday({
			...birthday,
			day
		});
	};

	const setMonth = month => {
		setBirthday({
			...birthday,
			month
		});
	};

	const setYear = year => {
		setBirthday({
			...birthday,
			year
		});
	};

	return {
		...birthday,
		setDay,
		setMonth,
		setYear
	};
};

const useContactConnect = () => {
	const [userContact, setUserContact] = useState({
		phone: '',
		mail: ''
	});

	const setPhone = phone => {
		setUserContact({
			...userContact,
			phone
		});
	};

	const setMail = mail => {
		setUserContact({
			...userContact,
			mail
		});
	};

	return {
		...userContact,
		setPhone,
		setMail
	};
};

const Formulario = styled.form`
	position: absolute;
	top: 50%;
	left: 50%;
	/* bring your own prefixes*/
	transform: translate(-50%, -30%);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background-color: #ffffff;
	border-radius: 5px;
	border: none;
`;

const Success = styled.div`
	display: flex;
	align-items: left;
	text-align: left;
	flex-direction: column;
	margin-top: 20px;
	max-height: 120px;
	max-width: 300px;
	font-size: 12px;
	background: #f074dc;
	color: #141414;
	padding: 10px 30px;
	border-radius: 5px;
	margin-bottom: 2rem;
`;

const Aviso = styled.div`
	display: flex;
	align-items: left;
	text-align: left;
	flex-direction: column;
	margin-top: 20px;
	max-height: 120px;
	max-width: 300px;
	font-size: 14px;
	background: #f0f0f0;
	color: #141414;
	padding: 10px 30px;
	border-radius: 5px;
`;

const Click = styled.button`
	border: none;
	border-radius: 5px;
	margin-top: 20px;
	background: #f64282;
	color: #fff;
	font-size: bold;
	width: 200px;
	padding: 15px 35px;
	&:hover {
		box-shadow: 3px 0px 40px rgba(0, 0, 0, 0.2);
		transform: scale(1.1, 1.1);
		transition: 500ms;
	}
	&:focus {
		border: 2px solid;
		outline: none;
		box-shadow: 3px 0px 30px rgba(0, 0, 0, 0.2);
	}
`;

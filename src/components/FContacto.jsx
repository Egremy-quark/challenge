import PropTypes from 'prop-types';
import styled from 'styled-components';
import imgProfile from '../styles/images/profile-pic.png';
import InputForm from './InputForm';

const FContacto = ({
	nombre,
	setNombre,
	segundoNombre,
	setSegundoNombre,
	apellidoPaterno,
	setApellidoPaterno,
	apellidoMaterno,
	setApellidoMaterno
}) => {
	return (
		<>
			<ContainerOfChat>
				<Chat>
					<ProfileImgBox src={imgProfile} alt='profileImg' />
					<SectionForm>
						<TitlePerForm> ¿Cuál es tu nombre? </TitlePerForm>
						<InputForm
							type='text'
							state={nombre}
							changeState={setNombre}
							name='nombre'
							placeholder='Nombre'
						/>
						<InputForm
							type='text'
							state={segundoNombre}
							changeState={setSegundoNombre}
							name='segundoNombre'
							placeholder='Segundo nombre'
						/>
						<InputForm
							type='text'
							state={apellidoPaterno}
							changeState={setApellidoPaterno}
							name='paterno'
							placeholder='Apellido paterno'
						/>
						<InputForm
							type='text'
							state={apellidoMaterno}
							changeState={setApellidoMaterno}
							name='segundoNombre'
							placeholder='Apellido materno'
						/>
					</SectionForm>
				</Chat>
			</ContainerOfChat>

			{(nombre || apellidoPaterno || apellidoMaterno) && (
				<Success>
					{`${nombre} ${segundoNombre} ${apellidoPaterno} ${apellidoMaterno}`}
				</Success>
			)}
		</>
	);
};

export default FContacto;

FContacto.propTypes = {
	nombre: PropTypes.any,
	setNombre: PropTypes.any,
	segundoNombre: PropTypes.any,
	setSegundoNombre: PropTypes.any,
	apellidoPaterno: PropTypes.any,
	setApellidoPaterno: PropTypes.any,
	apellidoMaterno: PropTypes.any,
	setApellidoMaterno: PropTypes.any
};

const ContainerOfChat = styled.div``;

const ProfileImgBox = styled.img`
	height: 55px;
	width: 55px;
	border-radius: 5px;
	border: 3px solid pink;
`;

const Chat = styled.div`
	display: flex;
	gap: 0px;
`;

const SectionForm = styled.div`
	display: flex;
	background-color: #f0f0f0;
	flex-direction: column;
	/* position: relative; */
	margin-left: 20px;
	margin-right: 10px;
	padding: 20px;
	align-items: right;
	text-align: center;
	border-radius: 5px;
`;

const TitlePerForm = styled.p`
	font-weight: bold;
	display: flex;
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
	/* font-weight: bold; */
	border-radius: 5px;
`;

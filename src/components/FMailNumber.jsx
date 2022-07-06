import PropTypes from 'prop-types';
import styled from 'styled-components';
import imgProfile from '../styles/images/profile-pic.png';
import InputForm from './InputForm';

const FMailNumber = ({ mail, setMail, phone, setPhone }) => {
	return (
		<>
			<ContainerOfChat>
				<Chat>
					<ProfileImgBox src={imgProfile} alt='profileImg' />
					<SectionForm>
						<TitlePerForm> Datos de contacto </TitlePerForm>
						<InputForm
							type='email'
							state={mail}
							changeState={setMail}
							name='mail'
							placeholder='Correo electrónico'
						/>
						<InputForm
							type='number'
							state={phone}
							changeState={setPhone}
							name='phone'
							placeholder='Teléfono celular'
						/>
					</SectionForm>
				</Chat>
			</ContainerOfChat>

			{(mail || phone) && (
				<Success>
					{`
                    Correo electrónico: ${mail}  
                    `}
					<br />
					<br />
					{`
                    Teléfono celular: ${phone} 
                    `}
				</Success>
			)}
		</>
	);
};

export default FMailNumber;

FMailNumber.propTypes = {
	mail: PropTypes.any,
	setMail: PropTypes.any,
	phone: PropTypes.any,
	setPhone: PropTypes.any
};

const ContainerOfChat = styled.div`
	margin: 40px;
`;

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
	border-radius: 5px;
`;

import styled from 'styled-components';
import clipBoard from '../styles/images/clipBoard.svg';
import clock from '../styles/images/clock.svg';

const Title = () => {
	return (
		<BoxTitle>
			<TitleInBox>
				<TextOfBox>
					Título de formulario
					<SecondLine>
						<Clock src={clock} alt='clipBoard' />
						En menos 5 minutos
					</SecondLine>
				</TextOfBox>
				<ClipBoard src={clipBoard} alt='clipBoard' />
			</TitleInBox>
		</BoxTitle>
	);
};

export default Title;

const BoxTitle = styled.div`
	top: 0px;
	width: 100%;
	height: 100%;
	background-color: #f074dc;
	border-radius: 5px 5px 0px 0px;
	margin-bottom: 20px;
`;

const TitleInBox = styled.div`
	display: grid;
	padding-top: 45px;
	padding-bottom: 45px;
	grid-template-columns: 1fr 1fr;
	margin-left: 15px;
	text-align: center;
	justify-items: center;
`;

const TextOfBox = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 18px;
	font-weight: bold;
`;

const SecondLine = styled.div`
	padding-top: 35px;
	display: flex;
	align-items: center;
	text-align: left;
	font-size: 14px;
`;

const ClipBoard = styled.img`
	height: 55px;
	width: 55px;
`;

const Clock = styled.img`
	height: 15px;
	width: 15px;
`;

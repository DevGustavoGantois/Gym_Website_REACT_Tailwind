//images
import Logo from '../src/assets/img/header/logo.svg';
import ResistanceImg from '../src/assets/img/workouts/resistance.png';
import BoxingImg from '../src/assets/img/workouts/boxing.png';
import BodyPumpImg from '../src/assets/img/workouts/body-pump.png';
import YogaImg from '../src/assets/img/workouts/yoga.png';
import FullBodyImg from '../src/assets/img/workouts/full-body.png';
import FitnessImg from '../src/assets/img/workouts/fitness.png';
import BattleRopeImg from '../src/assets/img/workouts/battle-rope.png';
import CommunityImg1 from '../src/assets/img/community/img1.png';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.png';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import JoinImg from '../src/assets/img/join/woman.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

export const header = {
    logo: Logo,
    btnLoginText: 'Entrar',
    btnSignupText: 'Cadastrar-se',
};

export const nav = [
    {name: 'Home', href: '#home'},
    {name: 'Sobre', href: '#sobre'},
    {name: 'Treinos', href: '#treinos'},
    {name: 'Preços', href: '#preços'},
    {name: 'Comunidade', href: '#comunidade'},
    {name: 'FAQ', href: '#FAQ'}
];

export const banner = {
    titlePart1: 'Aproveite a melhor parte do seu dia',
    titlePart2: '– você cabe aqui.',
    subtitle: 'Oferecemos um condicionamento físico sério, mas em um espaço divertido, amigável e seguro.',
    textBtn: 'Cadastre-se agora',
    img: '',
};

export const about = {
    icon: UsersIcn,
    title: 'Nossa missão',
    subtitle1: 'Distinguimo-nos pela nossa atmosfera motivadora insuperável, equipe experiente e equipamentos de exercício de primeira linha, que apoiam nossos membros no cumprimento de suas metas individuais de condicionamento físico.',
    subtitle2: 'A força da nossa identidade sincera é utilizada para inspirar cada pessoa que entra em nossas academias a se aprimorar.',
    link: 'Cadastre-se agora',
};

export const workouts = { 
    icon: CalendarIcn,
    title: 'Programas de Treinamento',
    programs: [
        {
            image: ResistanceImg,
            name: 'Resistência',
        },
        {
            image: BoxingImg,
            name: 'Boxe',
        },
        {
            image: BodyPumpImg,
            name: 'Body Pump'
        },
        {
            image: YogaImg,
            name: 'Ioga',
        },
        {
            image: FullBodyImg,
            name: 'Full Body',
        },
        {
            image: FitnessImg,
            name: 'Fitness',
        },
        {
            image: BattleRopeImg,
            name: 'Corda de Batalha'
        },
    ]
};

export const pricing = {
    icon: PriceIcn,
    title: 'Plano de preços',
    plans: [
        {
        name: 'Básico',
        price: '20',
        list: [
            {name: 'acesso ilimitado à academia'},
            {name: '1 Programa de treinamento'},
            {name: 'Consulta de fitness gratuita'}
        ],
        delay: 600,  
        },
        {
            name: 'Premium',
            price: '35',
            list: [
                {name:'acesso ilimitado à academia'},
                {name: '1 Programa de treinamento'},
                {name: 'Consulta de fitness gratuita'},
                {name: 'Personal Trainer'}
            ],
            delay: 800
        },
        {
            name: 'Elite',
            price: '49',
            list: [
                {name:'acesso ilimitado à academia'},
                {name: '1 Programa de treinamento'},
                {name: 'Consulta de fitness gratuita'},
                {name: 'Personal Trainer'},
                {name: '50% de desconto em bebidas'}
            ],
            delay: 1000
        }
    ],
}

export const community = {
    icon: CommunityIcn,
    title: 'Comunidade',
    testimonials: [
        {
            image: CommunityImg1,
            name: 'Marcos S.',
            message: '“Ótima localização, ótimo preço e pessoas ótimas e prestativas. O que querer mais?”'
        },
        {
            image: CommunityImg2,
            name: 'Laura A.',
            message: '“Gymme mudou minha vida. Não só fisicamente, mas mentalmente também. Sou uma mãe melhor e um ser humano melhor por causa desta academia.”'
        },
        {
            image: CommunityImg3,
            name: 'Jhon D.',
            message: '“Adoro esses treinos! Os treinadores são experientes e motivadores. Gymme é maravilhoso!”',
        },
        {
            image: CommunityImg4,
            name: 'Anna R.',
            message: '“Adoro esses treinos! Os treinadores são experientes e motivadores. Gymme é maravilhoso!”',
        }
    ]
}

export const faq = {
    icon: QuestionMarkIcn,
    title: 'FAQ',
    accordions: [
        {
            question: 'Como posso reservar uma aula de ginástica?',
            answer: 'Você pode reservar uma aula de ginástica através do nosso aplicativo Gymme.'
        },
        {
            question: 'Posso pagar em dinheiro pela minha adesão?',
            answer: 'Nos da Gymme aceitamos todo tipo de forma de pagamento, dinheiro, cartão de crédito, débito, pix...',
        },
        {
            question: 'Que idade preciso ter para ingressar?',
            answer: 'Fazer academia é para todas as idades, contato que seja supervisionado por um profissional de qualidade.',
        },
        {
            question: 'Existem armários?',
            answer: 'Sim, existem armários em todos os andares da nossa academia. Sempre pensamos na infraestutura para melhorar a experiência do cliente ao utilizar a nossa academia.'
        },
        {
            question: 'Como cancelo minha assinatura?',
            answer: 'Você pode cancelar sua assinatura através do nosso site mesmo, após a confirmação enviaremos um email para você.'
        },
        {
            question: 'Há água disponível na academia?',
            answer: 'Claro, temos bebedouros em todos os andares da nossa academia.',
        }
    ]
}

export const join = {
    image: JoinImg,
    title: 'Quer participar e se divertir?',
    subtitle: 'Manteremos você atualizado sobre o que você precisa saber sobre o Gymme. Nada mais, nada menos.',
    btnText: 'Cadastre-se agora'
}

export const footer = {
    logo: Logo,
    copyrightText: 'Todos os Direitos Reservados. Gymmme 2024'
};
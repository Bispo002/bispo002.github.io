import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import StickyNavbar from '@site/src/components/HomepageFeatures';

import './index.module.css';

const features = [
  { icon: 'angular', title: 'Frontend em Angular 19', description: 'Aplicação desenvolvida com features recentes do Angular, como standalone components e o novo builder esbuild.' },
  { icon: 'springboot', title: 'Backend em SpringBoot - Java', description: 'Implementação de serviços RESTful com SpringBoot, utilizando Java e tecnologias relacionadas para garantir escalabilidade e manutenibilidade.' },
  { icon: 'postgresql', title: 'PostgreSQL para Database', description: 'Utilização do PostgreSQL como banco de dados principal, garantindo integridade e performance dos dados, assim como criptografia de dados para maior segurança.' },
  { icon: 'vercel', title: 'Railway e Vercel', description: 'Deploy da aplicação em plataformas como Vercel e Railways, que possuem a utilização on-demand, visando otimizar gastos e eficiência.' },
  { icon: 'github', title: 'Código Open Source', description: 'Todo o ecossistema do projeto está disponível publicamente, incentivando o estudo, o fork e a colaboração da comunidade.' },
  { icon: 'docusaurus', title: 'Landing Page em Docusaurus', description: 'Essa página foi construída em React/Docusaurus, garantindo uma landing page técnica interativa, versionada e fácil de manter.' }
];

const steps = [
  { number: '01', title: 'Levantamento e Requisitos', description: 'Análise das necessidades docentes e estruturação dos dados baseados nas diretrizes da BNCC.' },
  { number: '02', title: 'Prototipação (UI/UX)', description: 'Criação de wireframes e definição da paleta de cores (Golden/Sand) visando acessibilidade e clareza, criando uma experiência similar ao papel para o usuário.' },
  { number: '03', title: 'Desenvolvimento (Codificação)', description: 'Implementação do Frontend (Angular) e da Documentação Técnica (Docusaurus/React).' },
  { number: '04', title: 'Testes e Deploy', description: 'Validação de performance, ajustes de build e implantação contínua nos ambientes de produção.' }
];

const brandColor = '#b5a55a';

const angularIcon = (
  <svg fill={brandColor} role="img" width="38" height="38" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Angular</title>
    <path d="M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z" />
  </svg>
);

const docusaurusIcon = (
  <svg fill={brandColor} role="img" width="38" height="38" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Docusaurus</title>
    <path d="M2.462 22.201h12.321a2.466 2.466 0 0 0 2.369-1.854c.026.004.052.008.079.008a.621.621 0 0 0 .615-.615.621.621 0 0 0-.615-.615c-.027 0-.053.004-.079.007l-.014-.055a.62.62 0 0 0 .378-.568.621.621 0 0 0-.615-.615.608.608 0 0 0-.371.127l-.042-.041a.606.606 0 0 0 .125-.368c0-.67-.919-.858-1.181-.241l-.055-.014c.003-.026.008-.052.008-.079a.622.622 0 0 0-.616-.615.621.621 0 0 0-.615.615h-.096a.617.617 0 0 0-1.033 0h-.717v-2.461h2.461c.115 0 .226-.017.331-.047a.307.307 0 1 0 .529-.304l.02-.021c.052.04.116.064.186.064h.002c.337 0 .428-.463.117-.591l.007-.028c.013.001.026.004.039.004a.31.31 0 0 0 .308-.308.31.31 0 0 0-.308-.308c-.013 0-.026.003-.039.004a.28.28 0 0 1-.007-.027c.327-.13-.028-.745-.305-.528l-.02-.021a.307.307 0 0 0 .062-.184c-.011-.326-.454-.416-.591-.12a1.238 1.238 0 0 0-.32-.047h-2.143a2.465 2.465 0 0 1 2.132-1.23h7.385V9.894l-8.618-.539a1.315 1.315 0 0 1-1.229-1.308c0-.688.542-1.265 1.229-1.307l8.618-.539v-1.23a2.473 2.473 0 0 0-2.462-2.462H8.615l-.307-.533a.356.356 0 0 0-.616 0l-.307.533-.308-.533a.355.355 0 0 0-.615 0l-.308.533-.308-.533a.355.355 0 0 0-.615 0l-.308.533-.008.001-.51-.51a.354.354 0 0 0-.594.159l-.168.628-.639-.171a.357.357 0 0 0-.436.435l.172.639-.628.169a.356.356 0 0 0-.16.594l.51.51v.008l-.533.307a.356.356 0 0 0 0 .616l.533.307-.533.308a.356.356 0 0 0 0 .616l.533.307-.533.308a.355.355 0 0 0 0 .615l.533.308-.533.308a.355.355 0 0 0 0 .615l.533.308-.533.307a.356.356 0 0 0 0 .616l.533.308-.533.307a.356.356 0 0 0 0 .616l.533.307-.533.308a.355.355 0 0 0 0 .615l.533.308-.533.308a.355.355 0 0 0 0 .615l.533.308-.533.308a.355.355 0 0 0 0 .615l.533.308-.533.307a.356.356 0 0 0 0 .616l.533.307-.533.308a.355.355 0 0 0 0 .615l.533.308-.533.308a.355.355 0 0 0 0 .615l.533.308a2.463 2.463 0 0 1-2.13-1.231A2.465 2.465 0 0 0 0 19.74c0 1.35 1.112 2.46 2.462 2.461zm19.692-5.204v2.743a2.473 2.473 0 0 1-2.461 2.461h-.001 1.231a2.466 2.466 0 0 0 2.383-1.854c.026.004.052.008.079.008A.621.621 0 0 0 24 19.74a.621.621 0 0 0-.615-.615c-.027 0-.053.004-.079.007l-.014-.055a.62.62 0 0 0 .378-.568.621.621 0 0 0-.615-.615.608.608 0 0 0-.371.127l-.042-.041a.612.612 0 0 0 .125-.368.623.623 0 0 0-.613-.615zm-4.067 2.62h2.223c.067 0 .123.056.123.123a.124.124 0 0 1-.123.123h-2.223a.845.845 0 0 0 0-.246zm-.33-1.231h2.553c.067 0 .123.056.123.123a.124.124 0 0 1-.123.123h-2.553a.845.845 0 0 0 0-.246zm-1.026-1.231h3.579c.067 0 .123.056.123.123a.124.124 0 0 1-.123.123h-3.474a.85.85 0 0 0-.105-.246zm3.579-.984h-6.159a.126.126 0 0 1-.123-.123c0-.068.056-.123.123-.123h6.159c.067 0 .123.056.123.123a.124.124 0 0 1-.123.123zm1.844-3.816v2.462c.115 0 .225-.017.331-.047a.308.308 0 1 0 .528-.304l.021-.021c.052.04.116.064.186.064a.312.312 0 0 0 .307-.308.306.306 0 0 0-.189-.283l.007-.028c.013.001.026.004.04.004a.312.312 0 0 0 .307-.308.312.312 0 0 0-.307-.308c-.014 0-.027.003-.04.004l-.007-.027a.31.31 0 0 0-.118-.592.306.306 0 0 0-.186.064l-.021-.021a.3.3 0 0 0 .063-.184c-.011-.326-.454-.416-.591-.12a1.24 1.24 0 0 0-.321-.047zm-6.059 2.339h4.215c.067 0 .123.056.123.123a.124.124 0 0 1-.123.123h-4.451a.564.564 0 0 0 .073-.19.553.553 0 0 0 .163-.056zm.454-1.208h3.761c.067 0 .123.056.123.123a.124.124 0 0 1-.123.123h-3.772a.552.552 0 0 0 .011-.246zm5.605-6.225h-.004c-.381.013-.561.393-.719.729-.166.35-.294.578-.504.572-.233-.009-.366-.271-.506-.549-.162-.32-.347-.682-.734-.668-.375.013-.556.344-.715.636-.169.311-.285.5-.507.491-.237-.008-.363-.222-.509-.469-.163-.275-.351-.585-.731-.574-.368.013-.549.294-.709.542-.169.262-.287.421-.513.412-.243-.009-.368-.186-.513-.391-.163-.231-.347-.491-.726-.479-.36.013-.541.243-.701.446-.151.192-.27.344-.52.335h-.005a.126.126 0 0 0-.123.123c0 .066.053.121.119.123.371.012.559-.222.723-.429.145-.184.27-.343.516-.352.237-.01.348.138.516.375.16.226.341.482.705.495.382.013.566-.273.729-.525.145-.226.271-.421.511-.429.22-.008.34.166.51.453.159.271.34.577.712.59.385.014.57-.322.732-.619.14-.257.273-.5.507-.508.221-.005.336.196.506.533.159.314.339.67.717.684h.021c.377 0 .556-.378.714-.713.14-.297.273-.576.501-.588zM7.385 6.509a.312.312 0 0 1-.308-.308c-.01-.532-.378-.911-.927-.922-.528-.011-.888.432-.919.922-.011.168-.139.307-.308.308a.31.31 0 0 1-.308-.308c0-.848.69-1.538 1.539-1.538.848 0 1.538.69 1.538 1.538a.312.312 0 0 1-.307.308zm9.846-2.308a.31.31 0 0 1 .308.308.31.31 0 0 1-.308.308.31.31 0 0 1-.308-.308.31.31 0 0 1 .308-.308zm2.461-.153a.31.31 0 0 1 .307.308.31.31 0 0 1-.308.308h-.001a.31.31 0 0 1-.307-.308.31.31 0 0 1 .308-.308z" />
  </svg>
);

const githubIcon = (
  <svg fill={brandColor} role="img" width="38" height="38" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const springBootIcon = (
  <svg fill={brandColor} role="img" width="38" height="38" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Spring Boot</title>
    <path d="m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z" />
  </svg>
);

const vercelIcon = (
  <svg fill={brandColor} role="img" width="38" height="38" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Vercel</title>
    <path d="m12 1.608 12 20.784H0Z" />
  </svg>
);

const postgresqlIcon = (
  <svg fill={brandColor} role="img" width="38" height="38" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>PostgreSQL</title>
    <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z" />
  </svg>
);

const githubButtonIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ctaIcon = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="5" y="24" width="26" height="4" rx="2" fill="currentColor" opacity="0.4" />
    <rect x="2" y="16" width="32" height="4" rx="2" fill="currentColor" opacity="0.7" />
    <rect x="8" y="8" width="20" height="4" rx="2" fill="currentColor" />
  </svg>
);

const mockupBadgeIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" fill="#b5a55a" opacity="0.2" />
    <path d="M4.5 7l2 2 3-3" stroke="#b5a55a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function FeatureIcon({ icon }: { icon: 'angular' | 'docusaurus' | 'github' | 'springboot' | 'vercel' | 'postgresql' }) {
  switch (icon) {
    case 'angular':
      return angularIcon;
    case 'docusaurus':
      return docusaurusIcon;
    case 'github':
      return githubIcon;
    case 'springboot':
      return springBootIcon;
    case 'vercel':
      return vercelIcon;
    case 'postgresql':
      return postgresqlIcon;
    default:
      return null;
  }
}

// --- SEÇÕES DA PÁGINA ---
function LandingHero() {
  return (
    <section className="hero-section">
      <div className="hero__bg-shapes">
        <div className="shape shape--1"></div>
        <div className="shape shape--2"></div>
        <div className="shape shape--3"></div>
      </div>
      <div className="landing-container">
        <div className="hero__content">
          <div className="hero__badge">
            <span>✦</span> Projeto Acadêmico
          </div>
          <h1 className="hero__title">
            PlanoFácil:<br />
            <em>Arquitetura e Desenvolvimento.</em>
          </h1>
          <p className="hero__subtitle">
            Estudo de caso focado na engenharia de software de uma plataforma educacional. 
            Desenvolvido utilizando Angular 19, SpringBoot e PostgreSQL, com deploy nas plataformas Vercel e Railway, e lading page em Docusaurus.
          </p>
          <div className="hero__cta">
            <a href="https://planofacil-chi.vercel.app/" target="_blank" rel="noreferrer" className="btn btn--primary btn--lg">
              Acessar Aplicação
            </a>
            <Link to="/docs/intro" className="btn btn--outline btn--lg">
              Documentação Técnica
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <div className="mockup">
            <div className="mockup__header">
              <div className="mockup__dots">
                <span></span><span></span><span></span>
              </div>
              <span className="mockup__title">Output Visual do Sistema</span>
            </div>
            <div className="mockup__body">
              <div className="mockup__row mockup__row--label">Stack Principal</div>
              <div className="mockup__row mockup__row--value">Angular 19, Springboot</div>
              <div className="mockup__row mockup__row--label">Banco de Dados</div>
              <div className="mockup__row mockup__row--value">PostgreSQL</div>
              <div className="mockup__row mockup__row--label">Plataformas de deploy</div>
              <div className="mockup__tags">
                <span className="tag">Railway</span>
                <span className="tag">Vercel</span>
              </div>
              <div className="mockup__row mockup__row--label">Status de cobertura</div>
              <div className="mockup__row mockup__row--value">Desenvolvimento Ativo</div>
              <div className="mockup__progress">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="features">
      <div className="landing-container">
        <div className="section-header">
          <p className="section-label">Stack & Tecnologias</p>
          <h2 className="section-title">O que compõe este ecossistema</h2>
          <p className="section-subtitle">Visão técnica das bibliotecas, frameworks e padrões arquiteturais adotados no desenvolvimento da plataforma.</p>
        </div>
        <div className="features__grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-card__icon">
                <FeatureIcon icon={feature.icon} />
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="landing-container">
        <div className="section-header">
          <p className="section-label">Metodologia</p>
          <h2 className="section-title">Fases de Desenvolvimento do Projeto</h2>
        </div>
        <div className="steps">
          {steps.map((step, idx) => (
            <div key={idx} className="step">
              <div className="step__number">{step.number}</div>
              {idx < steps.length - 1 && <div className="step__connector"></div>}
              <h3 className="step__title">{step.title}</h3>
              <p className="step__desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-section">
      <div className="landing-container">
        <div className="cta-box">
          <div className="cta-box__icon">
            {ctaIcon}
          </div>
          <h2 className="cta-box__title">Explore o Código Fonte</h2>
          <p className="cta-box__subtitle">Acesse a documentação completa para entender as decisões arquiteturais, ou visite o GitHub para analisar o código do sistema.</p>
          <div className="cta-box__actions">
            <a href="https://github.com/gabrielbachega1/extensao-unifil" target="_blank" rel="noreferrer" className="btn btn--primary btn--lg">{githubButtonIcon} Acessar Repositório</a>
            <Link to="/docs/intro" className="btn btn--ghost-light btn--lg">Ler Documentação Técnica</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- PÁGINA PRINCIPAL ---
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      wrapperClassName="homepage"
      title={`Arquitetura e Projeto | ${siteConfig.title}`}
      description="Documentação técnica e acadêmica do projeto PlanoFácil.">
      <StickyNavbar />
      <main className="landing-page">
        <LandingHero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
    </Layout>
  );
}
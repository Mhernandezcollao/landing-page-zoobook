import { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, Image, NavbarItem, Link, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "howitwork", "opinions"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    {name: "Inicio", href: "home"},
    {name: "Características", href: "features"},
    {name: "¿Cómo funciona?", href: "howitwork"},
    {name: "Opiniones", href: "opinions"},
  ];

  const itemsFeatures = [
    {
        id: "1", 
        title: "Red Social", 
        description: "Crear el perfil de tu mascota y compartir contenido.", 
        img: "https://i.imgur.com/s6ldPaA.png",  
        color: "#14E065"
    },
    {
        id: "2", 
        title: "Sistema de Escaneo", 
        description: "Crear el perfil de tu mascota y compartir contenido.", 
        img: "https://i.imgur.com/PB0jhoE.png",  
        color: "#FED116"
    },
    {
        id: "3", 
        title: "Control de Vacunas", 
        description: "Crear el perfil de tu mascota y compartir contenido.", 
        img: "https://i.imgur.com/ayZy68A.png",  
        color: "#90E0E2"
    },
    {
        id: "4", 
        title: "Historial Médico", 
        description: "Crear el perfil de tu mascota y compartir contenido.", 
        img: "https://i.imgur.com/p9HpMz7.png",  
        color: "#FF6A2A"
    },
    {
        id: "5", 
        title: "Rutina de Alimentación", 
        description: "Crear el perfil de tu mascota y compartir contenido.", 
        img: "https://i.imgur.com/tlsG41R.png",  
        color: "#4169E1"
    },
    {
        id: "6", 
        title: "Medicación Actual", 
        description: "Crear el perfil de tu mascota y compartir contenido.", 
        img: "https://i.imgur.com/L26SbHG.png",  
        color: "#BC33F2"
    },
  ]

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar
        maxWidth="full"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="text-primarytext flex w-full items-center mx-auto"
      >
        <div className='flex w-full items-center justify-center'>
          <div className='flex w-full max-w-6xl'>
            <NavbarContent className="md:hidden" justify="start">
              <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <NavbarContent className="pr-3">
              <NavbarBrand>
                <Image
                  isBlurred
                  width={170}
                  src="https://i.imgur.com/tSSFQFd.png" 
                  alt="NextUI Album Cover"
                  className=" md:flex hidden rounded-none"
                />
              </NavbarBrand>
            </NavbarContent>
            
            <NavbarContent className="hidden md:flex gap-4" justify="center">
              {menuItems.map((item, index) => (
                <NavbarItem key={index}>
                  <Link 
                    className={activeSection === item.href ? "text-primary font-bold border-b-3 border-b-primary" : "hover-link"} href={`#${item.href}`}
                  >
                    {item.name}
                  </Link>
                </NavbarItem>
              ))}
            </NavbarContent>
            <NavbarMenu className="bg-colornavbar">
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    className={activeSection === item.href ? "text-primary font-bold border-b-3 border-b-primary" : "hover-link"}
                    href={`#${item.href}`}
                    size="lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </div>

        </div>
      </Navbar>
      <div className="parallax-container parallax-img1">
        <div className='flex flex-col w-full h-full items-center justify-center max-w-6xl px-4 sm:px-8' id='home'>
          <h1 className='font-titanOne text-center text-4xl sm:text-5xl text-white'>Donde las Mascotas son las Estrellas</h1>
          <h2 className='text-center text-[11px] sm:text-[14px] text-gray-200 mt-3'>Porque cada mascota tiene su propio hashtag. Descubre, comparte y celebra momentos inolvidables en la mejor red social dedicada exclusivamente a tus mascotas: ¡Bienvenido a Zookook, donde las historias de tus mascotas brillan como nunca antes!.</h2>
          <div className='available-in'>
            <Image
              width={140}
              src="https://i.imgur.com/gYrr82Z.png" 
              className='rounded-none h-10'
            />
            <div className='h-3 w-3'></div>
            <Image
              width={140}
              src="https://i.imgur.com/QQqcGLB.png" 
              className='rounded-none h-10'
            />
          </div>
        </div>
      </div>

      <div className='w-full h-auto'>
        <div className='flex flex-col w-full items-center mx-auto max-w-6xl px-6 my-10' id='features'>
          <div className='flex w-full flex-col md:flex-row items-start md:justify-between md:items-center mb-5'>
            <p className='text-2xl sm:text-3xl font-titanOne mb-3 md:mb-0'>Características Principales</p>
            <p className='text-xs text-start md:text-end max-w-full md:max-w-64'>Estas son las cualidades más significativas y distintivas que definen nuestro producto.</p>
          </div>
          <div className='container-cards'>
            {
              itemsFeatures.map((item:any) => (
                <div className='flex h-48 w-full items-end'>
                  <div className={`flex relative w-full h-36 rounded-xl`} style={{backgroundColor: `${item.color}`}}>
                    <div className='flex flex-col justify-center w-1/2 h-full ml-5'>
                      <p className="title-card">{item.title}</p>
                      <small className="description-card">{item.description}</small>
                    </div>
                    <div className='absolute w-1/2 h-52 rounded-xl bottom-0 right-0'>
                      <img src={item.img} alt="" className='h-full w-full object-contain'/>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className='w-full h-auto'>
        <div className='flex flex-col w-full items-center mx-auto max-w-6xl px-6 my-10' id='howitwork'>
          <div className='flex w-full flex-col items-center mb-5'>
            <p className='text-2xl sm:text-3xl font-titanOne mb-3'>¿Cómo funciona?</p>
            <p className='text-xs text-center max-w-full'>Zoobook es una plataforma digital diseñada para la visibilidad de las mascotas. Aquí están los elementos clave de cómo funciona:</p>
          </div>
        </div>
      </div>

      <div className="parallax parallax-img2">
        <div className='flex flex-col w-full h-full items-center justify-center max-w-6xl px-4 sm:px-8'>
          <p className='font-titanOne text-center text-xl sm:text-2xl text-white'>
            1. Puedes seleccionar una foto de tu dispositivo o tomar una directamente para subirla.
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full h-[250px]">
        <div className='flex flex-col w-full h-full items-center justify-center max-w-6xl px-4 sm:px-8'>
          <p className='font-titanOne text-center text-xl sm:text-2xl text-black'>
            2. Añade un título y una descripción que se ajusten a tu foto.
          </p>
        </div>
      </div>

      <div className="parallax parallax-img3">
        <div className='flex flex-col w-full h-full items-center justify-center max-w-6xl px-4 sm:px-8'>
          <p className='font-titanOne text-center text-xl sm:text-2xl text-white'>
            3. Explora y descubre las fotos más recientes y populares de Zoobook.
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full h-[250px]">
        <div className='flex flex-col w-full h-full items-center justify-center max-w-6xl px-4 sm:px-8'>
          <p className='font-titanOne text-center text-xl sm:text-2xl text-black'>
            4. Mientras exploras, puedes dar 'Me gusta' a las fotos que te parezcan interesantes.
          </p>
        </div>
      </div>

      <div className='flex justify-center h-[50px] border-t-[1px] border-gray-200'>
        <div className='flex w-full h-full items-center justify-between max-w-6xl px-4 sm:px-8'>
          <Image
            isBlurred
            width={80}
            src="https://i.imgur.com/tSSFQFd.png" 
            alt="NextUI Album Cover"
            className="rounded-none"
          />
          <p className='text-[10px] text-gray-400'>&copy; 2024 Zoobook. Todos los derechos reservados.</p>
          <div className='flex'>
              <Image
                width={25}
                src="https://i.imgur.com/WYEmPJz.png"
                alt="NextUI Album Cover"
                className="rounded-full object-cover shadow-2xl cursor-pointer ml-2"
              />
              <Image
                width={25}
                src="https://i.imgur.com/090Z4DP.png" 
                alt="NextUI Album Cover"
                className="rounded-full object-cover shadow-2xl cursor-pointer ml-2"
              />
              <Image
                width={25}
                src="https://i.imgur.com/aznln4x.png" 
                alt="NextUI Album Cover"
                className="rounded-full object-cover shadow-2xl cursor-pointer ml-2"
              />
          </div>
        </div>
      </div>
{/* 
      <div className='w-full h-auto'>
        <div className='flex flex-col w-full items-center mx-auto max-w-6xl'>
          <div className='flex flex-col w-full px-6 my-10' id='features'>
            <div className='flex w-full flex-col md:flex-row items-start md:justify-between md:items-center mb-5'>
              <p className='text-2xl sm:text-3xl font-titanOne mb-3 md:mb-0'>Características Principales</p>
              <p className='text-xs text-start md:text-end max-w-full md:max-w-64'>Estas son las cualidades más significativas y distintivas que definen nuestro producto.</p>
            </div>
            <div className='container-cards'>
              {
                itemsFeatures.map((item:any) => (
                  <div className='flex h-48 w-full items-end'>
                    <div className={`flex relative w-full h-36 rounded-xl bg-${item.color}`}>
                      <div className='flex flex-col justify-center w-1/2 h-full ml-5'>
                        <p className="title-card">{item.title}</p>
                        <small className="description-card">{item.description}</small>
                      </div>
                      <div className='absolute w-1/2 h-52 rounded-xl bottom-0 right-0'>
                        <img src={item.img} alt="" className='h-full w-full object-contain'/>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          

          <div className='flex flex-col w-full px-6 my-10' id='howitwork'>
            <div className='flex w-full flex-col md:flex-row items-start md:justify-between md:items-center mb-5'>
              <p className='text-2xl sm:text-3xl font-titanOne mb-3 md:mb-0'>¿Cómo funciona?</p>
              <p className='text-xs text-start md:text-end max-w-full md:max-w-60'>Explicaremos cada una e la características de Zoobook.</p>
            </div>
            <div className='flex flex-col sm:grid sm:grid-cols-2 gap-5'>
              <div className='flex h-auto w-full justify-center items-start p-5'>
                <Image
                  src="https://i.imgur.com/tSSFQFd.png" 
                  alt="NextUI Album Cover"
                  className="h-20 min-w-20 max-w-20 object-contain rounded-full border-2 border-primary"
                />
                <div className='ml-5'>
                  <p className='text-lg font-bold mb-5'>Red Social</p>
                    <ul className='text-small text-gray-400 list-disc ml-3'>
                      <li>Puedes seleccionar una foto desde tu dispositivo para subir.</li>
                      <li>Añade un título y descripción</li>
                      <li>Descubre fotos recientes y populares</li>
                      <li>Mientras exploras, puedes dar 'Me gusta' a las fotos que encuentres interesantes</li>
                    </ul>
                </div>
              </div>
              <div className='flex h-auto w-full justify-center items-start p-5'>
                <Image
                  src="https://i.imgur.com/reYCfUK.png" 
                  alt="NextUI Album Cover"
                  className="h-20 min-w-20 max-w-20 object-contain rounded-full border-2 border-primary"
                />
                <div className='ml-5'>
                  <p className='text-lg font-bold mb-5'>Sistema de escaneo</p>
                  <p className='text-medium text-gray-400'>Puedes sacar fotos subirlar ycomo tambien puedes ver mas</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div> */}
    </div>
  )
}

export default App

import { EcommerceTemplate } from "@/templates/EcommerceTemplate"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Award, Shield, BookOpen, Lightbulb } from "lucide-react"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <EcommerceTemplate 
      pageTitle="Sobre Nosotros"
      showCart={true}
    >
      {/* Hero Section */}
      <section className="gradient-baby py-16 -mt-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-gentle-bounce mb-6">
            <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
          </div>
          <h1 className="text-4xl font-bold text-gradient mb-6">
            Nuestra Misión: Cada Bebé es Único
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            En Pequeños Genios creemos que cada bebé tiene un potencial extraordinario. 
            Nos especializamos en productos que apoyan el desarrollo de bebés con necesidades 
            especiales de aprendizaje, brindando herramientas que estimulan su crecimiento 
            cognitivo, sensorial y emocional.
          </p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Pequeños Genios nació en 2020 cuando la Dra. María Elena Rodríguez, 
                  especialista en desarrollo infantil temprano, se dio cuenta de la 
                  necesidad de productos especializados para bebés con desafíos de aprendizaje.
                </p>
                <p>
                  Como madre de un niño con necesidades especiales y profesional en el área, 
                  María Elena experimentó de primera mano la dificultad de encontrar juguetes 
                  y herramientas verdaderamente efectivas para el desarrollo cognitivo temprano.
                </p>
                <p>
                  Junto con un equipo de terapeutas ocupacionales, psicólogos infantiles y 
                  educadores especializados, creamos Pequeños Genios para ofrecer productos 
                  cuidadosamente seleccionados y respaldados por la ciencia.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-baby-blue/30 to-baby-mint/30 rounded-2xl p-8 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">+5,000</h3>
                <p className="text-foreground/70">Familias han confiado en nosotros</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-16 bg-gradient-to-br from-baby-mint/20 to-baby-peach/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Cada decisión que tomamos está guiada por estos principios fundamentales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Amor Incondicional</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Cada producto es seleccionado con el amor y cuidado que dedicaríamos 
                  a nuestros propios hijos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Excelencia Científica</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Todos nuestros productos están respaldados por investigación científica 
                  y recomendaciones de especialistas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Seguridad Total</h3>
                <p className="text-foreground/70 leading-relaxed">
                  La seguridad de los bebés es nuestra prioridad absoluta. 
                  Todos los productos son certificados y libres de tóxicos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Apoyo Familiar</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Entendemos los desafíos únicos que enfrentan las familias y 
                  ofrecemos apoyo integral más allá de la venta.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Educación Continua</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Compartimos conocimiento y recursos educativos para empoderar 
                  a las familias en su jornada.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Innovación Constante</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Buscamos continuamente nuevas soluciones y productos innovadores 
                  para el desarrollo infantil.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nuestro Equipo de Especialistas
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Un equipo multidisciplinario dedicado al desarrollo infantil temprano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-baby-blue/20 to-baby-mint/20 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">ME</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Dra. María Elena Rodríguez
                </h3>
                <p className="text-primary font-medium mb-3">Fundadora y Directora</p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Especialista en Desarrollo Infantil Temprano con 15 años de experiencia. 
                  Madre de un niño con necesidades especiales.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-baby-mint/20 to-baby-peach/20 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">LC</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Lic. Carmen Torres
                </h3>
                <p className="text-primary font-medium mb-3">Terapeuta Ocupacional</p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Especialista en terapia sensorial y desarrollo motor fino. 
                  Certificada en integración sensorial.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-baby-peach/20 to-baby-lavender/20 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">DR</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Dr. Roberto Mendez
                </h3>
                <p className="text-primary font-medium mb-3">Psicólogo Infantil</p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Especialista en desarrollo cognitivo y emocional temprano. 
                  Experto en autismo y trastornos del desarrollo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificaciones y Reconocimientos */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Certificaciones y Reconocimientos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Certificación ISO 9001
              </h3>
              <p className="text-foreground/70 text-sm">
                Sistemas de gestión de calidad certificados internacionalmente
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Certificación CE y FDA
              </h3>
              <p className="text-foreground/70 text-sm">
                Todos nuestros productos cumplen con estándares internacionales de seguridad
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Reconocimiento Nacional
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              En 2023, Pequeños Genios fue reconocida por la Asociación Nacional de 
              Desarrollo Infantil como "Empresa del Año" por su contribución al 
              bienestar de niños con necesidades especiales de aprendizaje.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            ¿Listo para Comenzar esta Jornada Juntos?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Cada bebé merece las mejores oportunidades para desarrollar su potencial único. 
            Permítenos acompañarte en esta hermosa jornada de crecimiento y descubrimiento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/">
                <Heart className="mr-2 h-5 w-5" />
                Explorar Productos
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/blog">
                <BookOpen className="mr-2 h-5 w-5" />
                Leer Nuestras Guías
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  )
}

export default About
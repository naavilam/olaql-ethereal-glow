
import React from 'react';
import { Beaker, Building, Atom, Dna } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AplicacaoProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  delay: string;
}

const AplicacaoCard = ({ title, description, icon: Icon, className, delay }: AplicacaoProps) => {
  return (
    <Card className={cn(
      "border-white/10 bg-white/10 backdrop-blur-xl hover:bg-white/15 transition-all duration-500 h-full opacity-0 animate-fade-in",
      className
    )} style={{ animationDelay: delay }}>
      <CardHeader className="pb-2">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-400/90 via-olaql-lilac to-olaql-blue flex items-center justify-center mb-4 shadow-lg">
          <Icon className="h-7 w-7 text-white" />
        </div>
        <CardTitle className="text-white text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white/80 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const Aplicacoes = () => {
  const aplicacoes = [
    {
      title: "Ciência de Materiais",
      description: "Desenvolvemos simulações quânticas que aceleram a descoberta de novos materiais com propriedades revolucionárias.",
      icon: Atom,
      delay: "0.2s"
    },
    {
      title: "Fármacos",
      description: "Nossa inteligência quântica otimiza o desenvolvimento de medicamentos, reduzindo custos e tempo de pesquisa.",
      icon: Beaker,
      delay: "0.4s"
    },
    {
      title: "Arquitetura",
      description: "Transformamos o design estrutural com algoritmos que encontram a perfeita harmonia entre forma e função.",
      icon: Building,
      delay: "0.6s"
    },
    {
      title: "Moléculas",
      description: "Simulamos comportamentos moleculares complexos para resolver desafios em química, biologia e medicina.",
      icon: Dna,
      delay: "0.8s"
    },
  ];

  return (
    <section id="aplicacoes" className="section-padding relative overflow-hidden fade-in-section">
      <div className="absolute -top-40 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-white">
          Aplicações
        </h2>
        
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/80">
          Nossa inteligência quântica transforma diversos campos através de soluções inovadoras.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aplicacoes.map((aplicacao, index) => (
            <AplicacaoCard
              key={index}
              title={aplicacao.title}
              description={aplicacao.description}
              icon={aplicacao.icon}
              delay={aplicacao.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aplicacoes;

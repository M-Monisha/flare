'use client'

import { useNavigate } from 'react-router-dom'
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Reusable Shader Background Logic
const defaultShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p) { p=fract(p*vec2(12.9898,78.233)); p+=dot(p,p+34.56); return fract(p.x*p.y); }
float noise(in vec2 p) { vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f); float a=rnd(i), b=rnd(i+vec2(1,0)), c=rnd(i+vec2(0,1)), d=rnd(i+1.); return mix(mix(a,b,u.x),mix(c,d,u.x),u.y); }
float fbm(vec2 p) { float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2); for (int i=0; i<5; i++) { t+=a*noise(p); p*=2.*m; a*=.5; } return t; }
float clouds(vec2 p) { float d=1., t=.0; for (float i=.0; i<3.; i++) { float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p); t=mix(t,d,a); d=a; p*=2./(i+1.); } return t; }
void main(void) {
	vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
	vec3 col=vec3(0);
	float bg=clouds(vec2(st.x+T*.5,-st.y));
	uv*=1.-.3*(sin(T*.2)*.5+.5);
	for (float i=1.; i<12.; i++) {
		uv+=.1*cos(i*vec2(.1+.01*i, .8)+i*i+T*.5+.1*uv.x);
		vec2 p=uv;
		float d=length(p);
		col+=.00125/d*(cos(sin(i)*vec3(1,2,3))+1.);
		float b=noise(i+p+bg*1.731);
		col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
		vec3 base = vec3(0.04, 0.07, 0.14);
		col = mix(base, col, 0.85);
	}
	O=vec4(col,1);
} `;

export function SplineHero() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-0 md:min-h-screen bg-[#060b17] overflow-hidden flex flex-col items-center justify-start md:justify-center pt-24 md:pt-0 pb-8 md:pb-0 px-4 md:px-0">
      <div className="absolute inset-0 z-[5] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl h-auto md:h-[480px] lg:h-[520px] xl:h-[650px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl mx-4 xl:mx-auto flex flex-col md:flex-row mt-8 md:mt-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 z-[20]"
          fill="white"
        />
        
          {/* Left content */}
          <div className="flex-1 p-6 md:p-14 relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.9] mb-4"
                    style={{
                        background: 'linear-gradient(90deg, #ff3b3b, #ff9f1c, #ffd60a, #2ec4b6, #00d4ff, #5a5aff, #a855f7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '200% 200%',
                    }}
                >
                  AI-powered<br />
                  <span className="text-white">business ecosystem</span>
                </h1>
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 text-gray-300 max-w-lg text-base sm:text-lg md:text-xl font-medium leading-relaxed"
            >
              AI automation, development, cloud infrastructure, and digital growth systems
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 md:mt-10 w-full md:w-auto"
            >
                <button 
                    onClick={() => navigate('/contact')}
                    className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-black rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)] w-full sm:w-auto"
                >
                    <span className="relative z-10">BOOK CONSULTATION</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#7DD3FC] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
            </motion.div>
          </div>

          {/* Right content - Spline Scene */}
          <div className="w-full h-[280px] md:h-auto md:flex-[0.8] relative flex items-center justify-center p-4 md:p-8 order-first md:order-last">
            <div className="w-full h-[85%] relative">
               <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full scale-110"
               />
            </div>
          </div>
        </div>
    </div>
  )
}

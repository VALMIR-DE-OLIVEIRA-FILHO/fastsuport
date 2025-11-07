import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

import { Lightbulb } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      // LOGIN
      if (email === "admin@test.com" && password === "123456") {
        toast.success("Login realizado com sucesso!");
        onLogin();
        
      } else {
        toast.error("Usuário ou senha inválidos!");
      }
    } else {
      // CADASTRO
      if (name && email && password.length >= 6) {
        alert("Conta criada com sucesso!");
        setIsLogin(true);
      } else {
        alert("Preencha todos os campos corretamente!");
      }
    }
  };

  return (
    <div
      className="flex h-screen w-screen"
      style={{
        backgroundImage:
          "radial-gradient(circle at 30% 30%, #1e40af, #1e3a8a, #172554)",
      }}
    >
      {/* Lado esquerdo com logo */}
      <div className="hidden md:flex w-1/2 flex-col items-center justify-center text-white">
        <Lightbulb size={90} className="mb-4 text-white" />
        <h1 className="text-3xl font-bold tracking-wide">FastSuport</h1>
        <p className="text-sm mt-2 text-blue-200">
          Suporte rápido e inteligente para seu negócio
        </p>
      </div>

      {/* Lado direito com formulário */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white rounded-tl-3xl shadow-2xl p-8">
        <div className="w-full max-w-sm">
          <AnimatePresence mode="wait">
            {!isLogin ? (
              // FORMULÁRIO DE CADASTRO
              <motion.div
                key="cadastro"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-6">
                  Crie sua conta
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600">
                      Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Digite o nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-b border-gray-300 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="exemplo@mail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-b border-gray-300 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600">
                      Senha
                    </label>
                    <input
                      type="password"
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border-b border-gray-300 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-500"
                      required
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Mínimo de 6 dígitos
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-2 rounded-md font-medium hover:bg-blue-500 transition"
                  >
                    Cadastrar
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-700 mb-2">
                    Já tem uma conta?
                  </p>
                  <button
                    onClick={() => setIsLogin(true)}
                    className="w-full bg-gray-800 text-white py-2 rounded-md font-medium hover:bg-blue-500 transition"
                  >
                    Acessar conta
                  </button>
                </div>
              </motion.div>
            ) : (
              // FORMULÁRIO DE LOGIN
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-6">
                  Acesse sua conta
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="exemplo@mail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-b border-gray-300 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600">
                      Senha
                    </label>
                    <input
                      type="password"
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border-b border-gray-300 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-2 rounded-md font-medium hover:bg-blue-500 transition"
                  >
                    Entrar
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-700 mb-2">
                    Não tem uma conta?
                  </p>
                  <button
                    onClick={() => setIsLogin(false)}
                    className="w-full bg-gray-800 text-white py-2 rounded-md font-medium hover:bg-blue-500 transition"
                  >
                    Criar conta
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

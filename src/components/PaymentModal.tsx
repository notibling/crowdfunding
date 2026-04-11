import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';
import { PayPalIcon } from './PayPalIcon';
import { paypalClientId, paypalAppName } from '../constants';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export function PaymentModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-[#111318] border border-white/10 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#16181D] p-6 text-white flex justify-between items-center shrink-0 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="bg-[#0070BA]/10 p-2 rounded-lg">
                  <PayPalIcon className="w-6 h-6 text-[#0070BA]" />
                </div>
                <div>
                  <h3 className="font-black text-xl tracking-tight uppercase leading-none">PayPal</h3>
                  <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mt-1">Colaboración Segura</p>
                </div>
              </div>
              <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Content - Scrollable */}
            <div className="p-8 overflow-y-auto custom-scrollbar">
              <div className="text-center mb-8">
                <p className="text-slate-400 text-sm font-medium mb-6">
                  Podés colaborar de forma segura utilizando tu cuenta de <strong>PayPal</strong> o tarjeta de crédito/débito:
                </p>
                
                <div className="min-h-[150px] flex flex-col items-center justify-center bg-white rounded-2xl p-6 transition-all relative">
                  <PayPalScriptProvider options={{ 
                    "client-id": paypalClientId,
                    currency: "USD",
                    intent: "capture",
                    "data-sdk-integration-source": "react-paypal-js"
                  }}>
                    <div className="w-full relative z-10">
                      <PayPalButtons 
                        style={{ 
                          layout: "vertical",
                          color: "gold",
                          shape: "rect",
                          label: "donate",
                          height: 48
                        }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                              {
                                description: `Donación para ${paypalAppName}`,
                                amount: {
                                  currency_code: "USD",
                                  value: "10.00",
                                },
                              },
                            ],
                            application_context: {
                              shipping_preference: "NO_SHIPPING",
                              user_action: "PAY_NOW"
                            }
                          } as any);
                        }}
                        onApprove={async (data, actions) => {
                          if (actions.order) {
                            const details = await actions.order.capture();
                            alert(`Gracias por tu colaboración, ${details.payer.name?.given_name}!`);
                            onClose();
                          }
                        }}
                      />
                    </div>
                  </PayPalScriptProvider>
                </div>
              </div>

              {/* Security Info */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center mb-4">
                <div className="flex items-center justify-center gap-4 opacity-50 mb-3">
                  <PayPalIcon className="w-6 h-6" />
                  <span className="text-white font-black text-xs tracking-tighter uppercase">PayPal Secure Checkout</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-500">
                  <ShieldCheck size={14} className="text-[#0070BA]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Protección al donante integrada</span>
                </div>
              </div>
              
              <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest font-bold">
                Tu apoyo nos permite seguir creando contenido independiente
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

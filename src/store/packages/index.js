import { packagesTypes } from './types';

const INITIAL_STATE = {
    data: {
        loading: false,
        success: false,
        error: false,
        packages: [
            {
                id: 1,
                name: "Individual",
                description: "Individual",
                payment_period: "M",
                price: 24.9,
                max_dependents: 0,
                active: true,
                package_details: [
                    {
                        id: 1,
                        description: "Sem direito a dependentes/adicionais",
                        included: false
                    },
                    {
                        id: 2,
                        description: "Telemedicina Einstein Conecta 24h",
                        included: true
                    },
                    {
                        id: 3,
                        description: "Seguros: Vida, assistência funerária, acidentes pessoais e invalidez",
                        included: true
                    },
                    {
                        id: 4,
                        description: "Descontos de até 40% nas escolas e universidades do Grupo Cruzeiro do Sul",
                        included: true
                    },
                    {
                        id: 5,
                        description: "Descontos de até 30% em farmácias",
                        included: false
                    },
                    {
                        id: 6,
                        description: "Descontos de até 80% em consultas e exames",
                        included: false
                    },
                    {
                        id: 7,
                        description: "Concorra a R$5.000,00 todos os meses.",
                        included: true
                    },
                    {
                        id: 8,
                        description: "Sem rede credenciada",
                        included: false
                    }
                ]
            },
            {
                id: 2,
                customer_type_id: 1,
                name: "Individual Plus",
                description: "Individual Plus",
                payment_period: "M",
                price: 37.9,
                max_dependents: 0,
                active: true,
                package_details: [
                    {
                        id: 9,
                        description: "Sem direito a dependentes/adicionais",
                        included: false
                    },
                    {
                        id: 10,
                        description: "Telemedicina Einstein Conecta 24h",
                        included: true
                    },
                    {
                        id: 11,
                        description: "Seguros: Vida, assistência funerária, acidentes pessoais e invalidez",
                        included: true
                    },
                    {
                        id: 12,
                        description: "Descontos de até 40% nas escolas e universidades do Grupo Cruzeiro do Sul",
                        included: true
                    },
                    {
                        id: 13,
                        description: "Descontos de até 30% em farmácias",
                        included: true
                    },
                    {
                        id: 14,
                        description: "Descontos de até 80% em consultas e exames",
                        included: true
                    },
                    {
                        id: 15,
                        description: "Concorra a R$5.000,00 todos os meses.",
                        included: true
                    },
                    {
                        id: 16,
                        description: "Sem rede credenciada",
                        included: true
                    }
                ]
            },
            {
                id: 3,
                name: "Familiar",
                description: "Familiar",
                payment_period: "M",
                price: 79.9,
                max_dependents: 3,
                active: true,
                package_details: [
                    {
                        id: 17,
                        description: "Sem direito a dependentes/adicionais",
                        included: true
                    },
                    {
                        id: 18,
                        description: "Telemedicina Einstein Conecta 24h",
                        included: true
                    },
                    {
                        id: 19,
                        description: "Seguros: Vida, assistência funerária, acidentes pessoais e invalidez",
                        included: true
                    },
                    {
                        id: 20,
                        description: "Descontos de até 40% nas escolas e universidades do Grupo Cruzeiro do Sul",
                        included: true
                    },
                    {
                        id: 21,
                        description: "Descontos de até 30% em farmácias",
                        included: false
                    },
                    {
                        id: 22,
                        description: "Descontos de até 80% em consultas e exames",
                        included: false
                    },
                    {
                        id: 23,
                        description: "Concorra a R$5.000,00 todos os meses.",
                        included: true
                    },
                    {
                        id: 24,
                        description: "Sem rede credenciada",
                        included: false
                    }
                ]
            },
            {
                id: 4,
                name: "Familiar Plus",
                description: "Familiar Plus",
                payment_period: "M",
                price: 97,
                max_dependents: 3,
                active: true,
                package_details: [
                    {
                        id: 25,
                        description: "Sem direito a dependentes/adicionais",
                        included: true
                    },
                    {
                        id: 26,
                        description: "Telemedicina Einstein Conecta 24h",
                        included: true
                    },
                    {
                        id: 27,
                        description: "Seguros: Vida, assistência funerária, acidentes pessoais e invalidez",
                        included: true
                    },
                    {
                        id: 28,
                        description: "Descontos de até 40% nas escolas e universidades do Grupo Cruzeiro do Sul",
                        included: true
                    },
                    {
                        id: 29,
                        description: "Descontos de até 30% em farmácias",
                        included: true
                    },
                    {
                        id: 30,
                        description: "Descontos de até 80% em consultas e exames",
                        included: true
                    },
                    {
                        id: 31,
                        description: "Concorra a R$5.000,00 todos os meses.",
                        included: true
                    },
                    {
                        id: 32,
                        description: "Sem rede credenciada",
                        included: true
                    }
                ]
            }
        ]
    },
    register: {
        loading: false,
        success: false,
        error: false,
    }
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case packagesTypes.PACKAGES_REQUEST:
            return {
                ...state,
                data: {
                    ...state.data,
                    loading: true,
                    success: false,
                    error: false,
                }
            };
        case packagesTypes.PACKAGES_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    packages: action.payload.data.packages,
                    success: true,
                    loading: false,
                    error: false
                }
            };
        case packagesTypes.PACKAGES_FAILURE:
            return {
                ...state,
                data: {
                    ...state.data,
                    success: false,
                    loading: false,
                    error: true
                }
            };

        case packagesTypes.REGISTER_REQUEST:
            return {
                ...state,
                register: {
                    loading: true,
                    success: false,
                    error: false,
                }
            };
        case packagesTypes.REGISTER_SUCCESS:
            return {
                ...state,
                register: {
                    ...state.register,
                    data: action.payload.data,
                    success: true,
                    loading: false,
                    error: false
                }
            };
        case packagesTypes.REGISTER_FAILURE:
            return {
                ...state,
                register: {
                    ...state.register,
                    data: action.payload.error,
                    success: false,
                    loading: false,
                    error: true
                }
            };
        default:
            return state;
    }
};

export default reducer;


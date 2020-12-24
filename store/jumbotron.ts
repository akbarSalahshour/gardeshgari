export const state = () => ({
    data: {
        title: {
            active: false,
            text: ''
        },
        subTitle: {
            active: false,
            text: ''
        },
        boxes: []
    }
});

export const getters = {
    getData: (state: any) => {
        return state.data;
    },
};

export const mutations = {
    setData: (state: any, data: object) => {
        state.data = data;
    }
}

export const actions = {
    setData: async ({
        commit
    }: any) => {
        let data = {
            title: {
                active: true,
                text: 'راهنمایی گشت و گذار در طبیعت انتخاب بهترین اقامتگاه'
            },
            subTitle: {
                active: true,
                text: 'لورم ایپسوم متن ساختگی با تولـید سادگــی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'
            },
            boxes: [
                {
                    text: 'اقامتگاه اصفهان',
                    path: '/'
                },
                {
                    text: 'اقامتگاه اصفهان',
                    path: '/'
                },
                {
                    text: 'اقامتگاه اصفهان',
                    path: '/'
                },
                {
                    text: 'اقامتگاه اصفهان',
                    path: '/'
                },
            ]
        };
        commit('setData', data);
    }
};

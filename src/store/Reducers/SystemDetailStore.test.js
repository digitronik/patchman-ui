import { initialState, SystemDetailStore } from './SystemDetailStore';

/* eslint-disable */

const stateAfterAction = {
    loaded: true,
    activeApps: [
        {
            title: 'Patch',
            name: 'patch',
            component: expect.any(Function)
        }
    ]
};
describe('SystemDetailStore', () => {
    it.each`
    state                                               | action                                               | result
    ${initialState}                                     | ${{ type: 'TEST_INVALID_ACTION', payload: {} }}      | ${{ loaded: false }}
    ${undefined}                                        | ${{ type: 'LOAD_ENTITY_FULFILLED', payload: {} }}    | ${{ ...initialState, ...stateAfterAction }}
    ${{ ...initialState, test: 'testState' }}           | ${{ type: 'LOAD_ENTITY_FULFILLED', payload: {} }}    | ${{ ...initialState, ...stateAfterAction, test: 'testState' }}
    ${undefined}                                        | ${{ type: 'LOAD_ENTITY_REJECTED', payload: {} }}     | ${{ ...initialState, ...stateAfterAction, }}
    ${{ ...initialState, test: 'testState' }}           | ${{ type: 'LOAD_ENTITY_REJECTED', payload: {} }}     | ${{ ...initialState, ...stateAfterAction, test: 'testState' }}
    ${initialState}                                     | ${{ type: 'FETCH_SYSTEM_DETAIL_FULFILLED', payload: { data: { attributes: { third_party: true } } } }}    | ${{ ...initialState, loaded: false, hasThirdPartyRepo: true }}
    `('$action', ({ state, action: { type, payload }, result }) => {
        const res = SystemDetailStore(state, { type, payload });
        expect(res).toEqual(result);
    });


    it.each`
    state                   | action                                                                  | result
    ${initialState}         | ${{ type: 'LOAD_ENTITY_REJECTED', payload: {} }}                        | ${'SystemDetail'}
    ${initialState}         | ${{ type: 'LOAD_ENTITY_FULFILLED', payload: {} }}                       | ${'SystemDetail'}

    `('$component', ({ state, action: { type, payload }, result }) => {
        const res = SystemDetailStore(state, { type, payload });
        const component = res.activeApps[0].component();
        expect(component.type.name).toEqual(expect.stringMatching(result))
    });

});

/* eslint-enable */

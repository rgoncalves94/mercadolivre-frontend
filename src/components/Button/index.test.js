import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';
describe('testing Button rendering', () => {
    
    test('testing children content', () => {
        const { root } = renderer.create(<Button>Meu Botão</Button>)
        expect(root.props.children).toBe("Meu Botão")
    });

    test('testing default prop values values content', () => {
        const { root } = renderer.create(<Button>Meu Botão</Button>)
        expect(root.props.onClick).toBe(undefined)
        expect(root.props.children).toBe("Meu Botão")
        expect(root.props.type).toBe("button")
        expect(root.props.variant).toBe("default")
    });
})

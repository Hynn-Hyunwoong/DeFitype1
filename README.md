# DeFitype1

## Solidity Write Style Guide

### Contract

1. Pragma
2. Import
3. Interfaces
4. Libraries
5. Contract

** Contract Internal Struct (Including Library, Interface)
- Type declarations
- State variables
- Events
- Error
- Modifiers
- Functions
    1. Constructor
    2. receive function (if exists)
    3. fallback function (if exists)
    4. external
    5. public
    6. internal
    7. private
    
### Function Guide
- function example(uint a) public pure virtual override onlyModifier retunrs (uint b)
   함수      함수명 (매개변수)   접근제어자                        함수수정자      결과값   타입

1. Visibility
2. Mutability
3. Virtual
4. Override
5. Custom Modifier


### Naming Convention

1. Capswords (PascalCase)
- 단어별 첫글자 대문자

2. MixedCase(camelCase)
- 첫단어를 제외한 나머지 단어는 첫글자 대문자

** Contract, Library 이름은 CapWords 사용, 파일명과 통일
** 1 Contract 1 File

- example
1. Constant
2. CapWords
- Struct
- Event
- Enums

3. mixedCase
- Function
- Variable
- Local
- Modifier

### NetSpec 

1. Ethereum, Natural Language Sepcification Formet
- Contract, Function, Variable 주석

#### Type
1. Title 
- A Title that should describe the contract/interface 
- Contract, Library, Interface

2. author
- The name of the author
- Contract, library, interface

3. Notice
- Explain to an end user what this does
- contract, library, interface, function public state variable, event

4. dev 
- Explain to developer any extra details
- contract, library, interface, function, public state variable, event

5. param
- Documents a parameter just like in Doxygen(must be followed by parameter name)
- function, event

6. return
- Documents the return variables of a contract's function
- function, public state variable

7. inheritdoc
- Copies all missing tags from the base function(must be followed by the contract name)
- function, public state variable

8. custom : ~~
- custom tag, semantics is application-defined
- everywhere


/*
    This file is part of the WebKit open source project.
    This file has been generated by generate-bindings.pl. DO NOT MODIFY!

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Library General Public
    License as published by the Free Software Foundation; either
    version 2 of the License, or (at your option) any later version.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Library General Public License for more details.

    You should have received a copy of the GNU Library General Public License
    along with this library; see the file COPYING.LIB.  If not, write to
    the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
    Boston, MA 02110-1301, USA.
*/

#pragma once

#include "AbortSignal.h"
#include "JSDOMWrapper.h"
#include "JSEventTarget.h"
#include <wtf/NeverDestroyed.h>

namespace WebCore {

class JSAbortSignal : public JSEventTarget {
public:
    using Base = JSEventTarget;
    using DOMWrapped = AbortSignal;
    static JSAbortSignal* create(JSC::Structure* structure, JSDOMGlobalObject* globalObject, Ref<AbortSignal>&& impl)
    {
        auto& vm = globalObject->vm();
        JSAbortSignal* ptr = new (NotNull, JSC::allocateCell<JSAbortSignal>(vm)) JSAbortSignal(structure, *globalObject, WTFMove(impl));
        ptr->finishCreation(vm);
        return ptr;
    }

    static JSC::JSObject* createPrototype(JSC::VM&, JSDOMGlobalObject&);
    static JSC::JSObject* prototype(JSC::VM&, JSDOMGlobalObject&);
    static AbortSignal* toWrapped(JSC::VM&, JSC::JSValue);

    DECLARE_INFO;

    static JSC::Structure* createStructure(JSC::VM& vm, JSC::JSGlobalObject* globalObject, JSC::JSValue prototype)
    {
        return JSC::Structure::create(vm, globalObject, prototype, JSC::TypeInfo(JSC::ObjectType, StructureFlags), info(), JSC::NonArray);
    }

    static JSC::JSValue getConstructor(JSC::VM&, const JSC::JSGlobalObject*);
    template<typename, JSC::SubspaceAccess mode> static JSC::GCClient::IsoSubspace* subspaceFor(JSC::VM& vm)
    {
        if constexpr (mode == JSC::SubspaceAccess::Concurrently)
            return nullptr;
        return subspaceForImpl(vm);
    }
    static JSC::GCClient::IsoSubspace* subspaceForImpl(JSC::VM& vm);
    DECLARE_VISIT_CHILDREN;
    template<typename Visitor> void visitAdditionalChildren(Visitor&);

    template<typename Visitor> static void visitOutputConstraints(JSCell*, Visitor&);
    static void analyzeHeap(JSCell*, JSC::HeapAnalyzer&);
    AbortSignal& wrapped() const
    {
        return static_cast<AbortSignal&>(Base::wrapped());
    }

    Ref<AbortSignal> protectedWrapped() const;

protected:
    JSAbortSignal(JSC::Structure*, JSDOMGlobalObject&, Ref<AbortSignal>&&);

    void finishCreation(JSC::VM&);
};

class JSAbortSignalOwner final : public JSC::WeakHandleOwner {
public:
    bool isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown>, void* context, JSC::AbstractSlotVisitor&, const char**) final;
    void finalize(JSC::Handle<JSC::Unknown>, void* context) final;
};

inline JSC::WeakHandleOwner* wrapperOwner(DOMWrapperWorld&, AbortSignal*)
{
    static NeverDestroyed<JSAbortSignalOwner> owner;
    return &owner.get();
}

inline void* wrapperKey(AbortSignal* wrappableObject)
{
    return wrappableObject;
}

JSC::JSValue toJS(JSC::JSGlobalObject*, JSDOMGlobalObject*, AbortSignal&);
inline JSC::JSValue toJS(JSC::JSGlobalObject* lexicalGlobalObject, JSDOMGlobalObject* globalObject, AbortSignal* impl) { return impl ? toJS(lexicalGlobalObject, globalObject, *impl) : JSC::jsNull(); }
JSC::JSValue toJSNewlyCreated(JSC::JSGlobalObject*, JSDOMGlobalObject*, Ref<AbortSignal>&&);
inline JSC::JSValue toJSNewlyCreated(JSC::JSGlobalObject* lexicalGlobalObject, JSDOMGlobalObject* globalObject, RefPtr<AbortSignal>&& impl) { return impl ? toJSNewlyCreated(lexicalGlobalObject, globalObject, impl.releaseNonNull()) : JSC::jsNull(); }

template<> struct JSDOMWrapperConverterTraits<AbortSignal> {
    using WrapperClass = JSAbortSignal;
    using ToWrappedReturnType = AbortSignal*;
};

} // namespace WebCore